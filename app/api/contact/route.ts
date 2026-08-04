import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  area?: string;
  message?: string;
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

  const { name, phone } = body;

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

  // TODO: Khi mở rộng, thay đoạn log này bằng lưu vào database / gửi email /
  // đẩy sang CRM (ví dụ Resend, Nodemailer, hoặc một bảng "leads" trong DB).
  console.log("[Lead tư vấn mới]", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
