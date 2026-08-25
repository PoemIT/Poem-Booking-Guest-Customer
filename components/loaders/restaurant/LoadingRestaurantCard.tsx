import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const LoadingRestaurantCard = () => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden h-80 flex flex-col bg-white">
      <Skeleton className="flex-1 relative overflow-hidden"></Skeleton>
      <div className="p-4 flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-20 h-8" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Skeleton className="w-10 h-6" />
          </div>
          <Skeleton className="w-15 h-6" />
        </div>
      </div>
    </div>
  );
};
