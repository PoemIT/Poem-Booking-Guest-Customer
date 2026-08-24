import { AppartmentCollections } from "@/components/appartements/AppartmentCollections";
import { FeaturedAppartments } from "@/components/appartements/FeaturedAppartments";
import { AppartmentMainHero } from "@/components/appartements/MainHero";
import { Message } from "@/components/home/Message";
import React from "react";

const AppartmentPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <AppartmentMainHero />
      <AppartmentCollections />
      <FeaturedAppartments />
      <Message />
    </div>
  );
};

export default AppartmentPage;
