"use client";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CustomerService01FreeIcons,
  ShoppingCart,
} from "@hugeicons/core-free-icons";
import { useCartStore } from "@/lib/useCart";

export const HomeNavbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };
  const Links = [
    {
      label: "Home",
      link: "/",
      key: "op",
    },
    {
      label: "Hotels",
      link: "/hotels",
      key: "hotels",
    },
    {
      label: "Appartments",
      link: "/appartment",
      key: "appartment",
    },
    {
      label: "Buses",
      link: "/buses",
      key: "buses",
    },
    {
      label: "Restaurants",
      link: "/restaurants",
      key: "restaurants",
    },
  ];

  const { items } = useCartStore();
  return (
    <div className="w-full hidden z-90 md:flex fixed top-0 border-b bg-background border-border">
      <div className="container-x h-(--nav-height) flex justify-between gap-2">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <Image src="/logo.png" alt="Poem Booking" width={40} height={40} />
            <span className="font-bold">Poem Booking</span>
          </div>
          <div className="flex items-center text-[14px] gap-6">
            {Links.map((link, i) => (
              <Link
                className={cn(
                  "cursor-pointer hover:underline underline-offset-4",
                  isActive(link.link) || pathname.split("/").includes(link.key)
                    ? "underline text-primary"
                    : "",
                )}
                href={link.link}
                key={i}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/account/support"}
            className={cn(
              "relative p-2 rounded-full",
              pathname === "/account/support"
                ? " bg-bg-mute"
                : "text-muted-foreground",
            )}
          >
            <HugeiconsIcon
              strokeWidth={pathname === "/account/support" ? 2 : 1}
              icon={CustomerService01FreeIcons}
              size={20}
            />
          </Link>
          <Link
            href={"/cart"}
            className={cn(
              "relative",
              pathname === "/cart" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <HugeiconsIcon icon={ShoppingCart} size={20} />
            <span className="absolute p-1 w-4 h-4 rounded-full -top-2 -right-2 flex items-center justify-center text-[10px] bg-primary/20 text-primary font-bold border border-primary/30">
              {items.length}
            </span>
          </Link>
          <Link href={"/account"}>
            <Button
              className={cn(
                "text-[14px] bg-secondary-foreground hover:bg-secondary-foreground/80 text-white rounded-full p-5 px-6",
                pathname.includes("/account")
                  ? "bg-primary hover:bg-primary/80"
                  : "",
              )}
            >
              Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
