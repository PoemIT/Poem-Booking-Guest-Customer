import { hotelCollections } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const Destinations = () => {
  return (
    <section className="flex container-x flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <h2>Explore Destinations</h2>
        <span className="text-primary text-xs">View all Regions</span>
      </div>
      <div className=" grid grid-cols-1 md:grid-rows-2 w-full h-fit md:max-h-140 border-none gap-4 md:grid-cols-4 relative">
        {hotelCollections.map((collection, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl overflow-hidden h-40 md:h-auto relative",
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 1
                  ? "md:col-span-1 md:row-span-1"
                  : index === 2
                    ? "md:col-span-1 md:row-span-1"
                    : index === 3
                      ? "md:col-span-2 md:row-span-1"
                      : "",
            )}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col p-4 text-xs items-start text-white justify-end gap-0.5">
              <span className="text-[16px] font-bold">{collection.name}</span>
              <p className="opacity-90">{collection.description}</p>
            </div>
            <img
              src={collection.image}
              alt={`room image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* <div className="w-full grid gap-6 grid-cols-2">
        <div className="min-h-40 row-span-2 rounded-2xl overflow-hidden">
          <Image
            src={"/default.png"}
            height={300}
            width={400}
            alt="Just an Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-95 rounded-2xl overflow-hidden">
          <Image
            src={"/default.png"}
            height={300}
            width={400}
            alt="Just an Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex gap-6">
          <div className="min-h-40 flex-1 rounded-2xl overflow-hidden">
            <Image
              src={"/default.png"}
              height={300}
              width={400}
              alt="Just an Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-h-40 flex-1 rounded-2xl overflow-hidden">
            <Image
              src={"/default.png"}
              height={300}
              width={400}
              alt="Just an Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};
