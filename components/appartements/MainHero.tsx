"use client";
import Link from "next/link";
import { ApartmentFilters } from "../filtersblock/ApartmentFilters";
import { Button } from "../ui/button";
import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const AppartmentMainHero = () => {
  return (
    <section className="w-full flex items-center justify-center text-white h-screen md:h-[calc(600px+var(--nav-height))] bg-[url('/default.png')] bg-cover relative">
      <div className="absolute inset-0 bg-black/40">
        <div className="w-full h-full md:h-[600px]  container-x gap-6 flex item flex-col justify-center">
          <div className="flex flex-col gap-6 items-center justify-center text-start md:text-center w-full md:max-w-[70%]">
            <h1 className="text-4xl md:text-6xl text-white  flex flex-col gap-2 font-bold">
              Discover Curated Comfort in the Heart of Cameroon
            </h1>
          </div>
          <Link href={"/appartment/all"}>
            <Button className="p-6 w-40 flex items-center gap-2 ">
              Explore Apartments <HugeiconsIcon icon={ArrowRight01FreeIcons} />
            </Button>
          </Link>
          <div className="w-full md:w-[85%]  shadow-md gap-4 text-black p-6 bg-white rounded-2xl border border-border flex flex-col">
            <ApartmentFilters />
          </div>
        </div>
      </div>
    </section>
  );
};
