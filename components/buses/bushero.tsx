"use client";
import {
  ArrowRight,
  ArrowRight01FreeIcons,
  Bed,
  Building01Icon,
  Bus01FreeIcons,
  Calendar,
  Location,
  People,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";
import { regions } from "@/lib/data";
import { DatePickerDemo } from "../ui/date-picker";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BusFilter } from "../filtersblock/BusFilter";

export const BusesHero = () => {
  return (
    <section className="w-full flex items-center justify-center text-white h-[calc(600px+var(--nav-height))] bg-[url('/default.png')] bg-cover relative">
      <div className="absolute inset-0 bg-black/40">
        <div className="w-full h-[600px] mt-(--nav-height) container-x border-b border-border flex flex-col justify-center">
          <div className="flex flex-col gap-6 text-start w-full max-w-[50%]">
            <h1 className="text-6xl flex flex-col gap-2 font-bold">
              <span className="text-white font-bold">
                Redefining the Road. Luxury Bus Travel.
              </span>
            </h1>
            <p className="text-gray-100">
              Experience the gold standard of travel across Cameroon with
              premium fleets, verified safety, and world-class service.
            </p>
            <Link href={"/buses/all"}>
              <Button className="p-6 w-40 flex items-center gap-2 ">
                Explore Bus Routes{" "}
                <HugeiconsIcon icon={ArrowRight01FreeIcons} />
              </Button>
            </Link>
          </div>

          <div className="w-full md:w-[85%] mt-8 shadow-md gap-4 text-black p-6 bg-white rounded-2xl border border-border flex flex-col">
            <BusFilter />
          </div>
        </div>
      </div>
    </section>
  );
};
