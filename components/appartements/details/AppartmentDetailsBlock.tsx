"use client";
import React, { useEffect, useState } from "react";
import { AppartmentDetailsHero } from "./DetailsHero";
import { AppartmentDetailsContent } from "./AppartmentDetailsContent";
import { Apartment } from "@/lib/types";

export const AppartmentDetailsBlock = ({
  apartment,
}: {
  apartment: Apartment;
}) => {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container-x flex flex-col gap-10">
      <AppartmentDetailsHero isLoading={loading} apartment={apartment} />
      <AppartmentDetailsContent apartment={apartment} loading={loading} />
    </div>
  );
};
