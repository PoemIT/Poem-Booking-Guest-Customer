"use client";
import { ApartmentFilters } from "../filtersblock/ApartmentFilters";

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
            <ApartmentFilters />
          </div>
        </div>
      </div>
    </section>
  );
};
