"use client";
import React from "react";
import { Links } from "../ui/home_nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export const MobileNavigationTab = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <footer className="grid h-(--mobile-nav-height) z-30 min-w-full bg-background items-center justify-center grid-cols-5 fixed -bottom-0.5 left-0 border-t border-border p-1 lg:hidden">
      {Links.map((link, i) => (
        <Link
          href={link.link}
          key={i}
          className={cn(
            "flex flex-col gap-0.5 items-center justify-center text-[10px]",
            isActive(link.link) || pathname.split("/").includes(link.key)
              ? "text-primary"
              : "",
          )}
        >
          <HugeiconsIcon icon={link.icon} size={20} />
          <span>{link.label}</span>
        </Link>
      ))}
    </footer>
  );
};
