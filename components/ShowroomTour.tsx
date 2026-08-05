"use client";

import { useState } from "react";
import { Compass, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { showroomTabs } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ShowroomTour() {
  const [active, setActive] = useState(showroomTabs[0].key);
  const activeTab = showroomTabs.find((tab) => tab.key === active) ?? showroomTabs[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {showroomTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
              active === tab.key
                ? "bg-ink text-cream"
                : "bg-ink/5 text-ink/60 hover:bg-ink/10"
            )}
          >
            <tab.icon className="h-4 w-4" strokeWidth={1.5} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl bg-ink">
        <div className="relative aspect-video w-full">
          {activeTab.embedUrl ? (
            <iframe
              src={activeTab.embedUrl}
              title={`Showroom 360 - ${activeTab.label}`}
              className="h-full w-full"
              frameBorder={0}
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-light">
                <Compass className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-cream sm:text-xl">
                  Tour 360° khu {activeTab.label.toLowerCase()} đang được xây dựng
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/60">
                  {activeTab.description} Trong lúc chờ hoàn thiện, bạn có thể đặt lịch tham
                  quan showroom trực tiếp hoặc để lại thông tin để được tư vấn.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Button href="/#lien-he" size="md">
                  Đặt lịch tham quan
                </Button>
                <Button href={siteConfig.phoneHref} size="md" variant="outline-light">
                  <PhoneCall className="h-4 w-4" />
                  Gọi tư vấn nhanh
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
