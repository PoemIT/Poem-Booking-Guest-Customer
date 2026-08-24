import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import Image from "next/image";

const FeaturedAppartmentCard = () => {
  return (
    <div className="flex flex-col gap-4 h-90">
      <div className="flex flex-1 rounded-2xl overflow-hidden relative">
        <span className="absolute top-2 right-2 text-xs text-primary font-bold p-1 px-2 rounded-full bg-white/50 w-fit">
          New
        </span>
        <Image
          src={"/default.png"}
          className="h-full w-full object-cover"
          width={300}
          height={300}
          alt="app"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-bold">The Akwa Heights Executive</span>
        <div className="flex flex-col gap-1.5 text-[14px] text-muted-foreground ">
          <span>Akwa, Douala</span>
          <span>2 BR • Laundry • High-Speed</span>
        </div>
        <span className="font-bold">Starting from 85,000 XAF</span>
      </div>
    </div>
  );
};

export const FeaturedAppartments = () => {
  return (
    <section className="container-x flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-primary uppercase">Top Rated</span>
        <div className="w-full flex flex-col gap-4 justify-between items-end md:flex-row">
          <div className="flex flex-col gap-1">
            <h2>Featured Apartments</h2>
            <p className="text-[14px] text-muted-foreground">
              Experience the finest living spaces across Cameroon's most
              prestigious neighborhoods.
            </p>
          </div>
          <Link href={"/"}>
            <Button variant={"link"}>
              View All <HugeiconsIcon icon={ArrowRight} size={20} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FeaturedAppartmentCard />
      </div>
    </section>
  );
};
