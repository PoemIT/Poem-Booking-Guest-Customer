"use client";
import { Message } from "@/components/home/Message";
import { CollectionsSection } from "@/components/hotels/Collections";
import { FeaturedHotels } from "@/components/hotels/FeaturedHotels";
import { HeroMain } from "@/components/hotels/HeroMain";
import { WhyPoem } from "@/components/hotels/WhyPoem";

import React from "react";

type FilterOption = {
  id: string;
  label: string;
  checked: boolean;
};

type FilterGroup = {
  id: string;
  title: string;
  options: FilterOption[];
};

const HotelsPage = () => {
  return (
    <main className="flex flex-col gap-20">
      <HeroMain />
      <div className="flex  gap-8 relative min-h-screen">
        <div className="flex flex-1 flex-col gap-20">
          <CollectionsSection />
          <FeaturedHotels />
          <WhyPoem />
          <Message />
        </div>
      </div>
    </main>
  );
};

export default HotelsPage;
