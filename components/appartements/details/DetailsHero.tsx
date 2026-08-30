import { LoadingGridHero } from "@/components/loaders/hoteldetails/GridHero";
import { Apartment } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

export const AppartmentDetailsHero = ({
  apartment,
  isLoading,
}: {
  apartment: Apartment;
  isLoading: Boolean;
}) => {
  if (isLoading) {
    return (
      <div className="container-x">
        <LoadingGridHero />
      </div>
    );
  }
  return (
    <div className=" grid grid-rows-2 container-x hero border-none gap-2  grid-cols-1  md:grid-cols-4 relative">
      {apartment.images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "rounded-2xl overflow-hidden",
            index === 0
              ? "md:col-span-2 md:row-span-2"
              : index === 1
                ? "col-span-1 row-span-1"
                : index === 2
                  ? "col-span-1 row-span-1 hidden md:flex"
                  : index === 3
                    ? "col-span-2 row-span-1 hidden md:flex"
                    : "",
          )}
        >
          <img
            src={image}
            alt={`room image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
