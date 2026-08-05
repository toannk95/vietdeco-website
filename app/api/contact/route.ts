import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFICATION_EMAILS = [
  "nguyenkhanhtoan2395@gmail.com",
  "admin@vietdeco.com.vn",
  "phamtiendat1309@gmail.com",
];

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  area?: string;
  message?: string;
}

function buildEmailHtml(body: ContactPayload) {
  const rows: [string, string][] = [
    ["Họ tên", body.name || ""],
    ["Số điện thoại", body.phone || ""],
    ["Email", body.email || "(không cung cấp)"],
    ["Loại hình không gian", body.propertyType || "(không chọn)"],
    ["Diện tích", body.area || "(không cung cấp)"],
    ["Ghi chú / yêu cầu", body.message || "(không có)"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#8C6A3A;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:8px 12px;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
      <h2 style="color:#201C18;">Có khách hàng mới để lại thông tin tư vấn</h2>
      <table style="border-collapse:collapse;width:100%;background:#F7F3EC;border-radius:8px;overflow:hidden;">
        ${rowsHtml}
      </table>
      <p style="color:#666;font-size:12px;margin-top:16px;">
        Gửi từ form "Để lại thông tin tư vấn" trên website VietDeco.
      </p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 }
    );
  }

  const { name, phone, email } = body;

  if (!name || !name.trim() || !phone || !phone.trim()) {
    return NextResponse.json(
      { success: false, error: "Vui lòng nhập đầy đủ họ tên và số điện thoại." },
      { status: 400 }
    );
  }

  const phoneDigits = phone.replace(/\s|-/g, "");
  if (!/^(0|\+84)\d{9,10}$/.test(phoneDigits)) {
    return NextResponse.json(
      { success: false, error: "Số điện thoại không hợp lệ." },
      { status: 400 }
    );
  }

  console.log("[Lead tư vấn mới]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "VietDeco Website <onboarding@resend.dev>",
        to: NOTIFICATION_EMAILS,
        replyTo: email && email.trim() ? email : undefined,
        subject: `Lead tư vấn mới: ${name}`,
        html: buildEmailHtml(body),
      });
    } catch (error) {
      // Khong lam that bai request cua khach neu gui email loi -
      // lead van duoc ghi lai o log server ben tren.
      console.error("[Gửi email thông báo thất bại]", error);
    }
  }

  return NextResponse.json({ success: true });
}
