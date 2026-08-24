"use client";
import React, { useEffect, useState } from "react";
import { AllAppartmentHero } from "./AllHero";
import { AllAppartmentContent } from "./AllContent";

export const AllAppartmentBlock = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-20 container-x">
      <AllAppartmentHero />
      <AllAppartmentContent loading={loading} />
    </div>
  );
};
