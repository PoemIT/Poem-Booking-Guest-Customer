import {
  ArrowRight,
  ArrowRight01FreeIcons,
  Bed,
  Building01Icon,
  Bus01FreeIcons,
  Calendar,
  Location,
  People,
  Search,
  User,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { Button } from "../ui/button";
import { regions } from "@/lib/data";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";
import { DatePickerDemo } from "../ui/date-picker";
import { Input } from "../ui/input";

export const AppartmentMainHero = () => {
  return (
    <section className="w-full flex items-center justify-center text-white h-[calc(600px+var(--nav-height))] bg-[url('/default.png')] bg-cover relative">
      <div className="absolute inset-0 bg-black/40">
        <div className="w-full h-[600px] mt-(--nav-height) container-x border-b border-border items-center flex flex-col justify-center">
          <div className="flex flex-col gap-6 items-center justify-center text-center w-full md:max-w-[70%]">
            <h1 className="text-6xl flex flex-col gap-2 font-bold">
              <span className="text-white font-bold">
                Discover Curated Comfort in the Heart of Cameroon
              </span>
            </h1>
          </div>

          <div className="w-full md:w-[85%] mt-8 shadow-md gap-4 text-black p-6 bg-white rounded-2xl border border-border flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-end gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-bold flex gap-1 items-center">
                  <HugeiconsIcon icon={Location} size={12} />
                  Location
                </span>
                <Combobox items={regions}>
                  <ComboboxInput
                    className={"h-10"}
                    placeholder="Select an Origin"
                  />
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold flex gap-1 items-center">
                  <HugeiconsIcon icon={Calendar} size={12} />
                  Date
                </span>
                <DatePickerDemo className="w-full" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold flex gap-1 items-center">
                  <HugeiconsIcon icon={User} size={12} />
                  Guests
                </span>
                <Input className="h-10" placeholder="Guest" type="number" />
              </div>
              <Button className={" p-5 w-full"}>
                <HugeiconsIcon icon={Search} size={20} /> Search Appartments
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
