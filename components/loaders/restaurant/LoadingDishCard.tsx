import { Skeleton } from "@/components/ui/skeleton";

export const DishCardSkeleton = () => {
  return (
    <div className="w-full flex overflow-hidden h-80 flex-col gap-3">
      <div className="w-full flex flex-1 overflow-hidden rounded-2xl gap-2">
        <Skeleton className="w-full h-full rounded-2xl" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col text-[14px] gap-1.5">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <div className="w-full justify-between mt-2 flex items-center">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-7 w-28 rounded-md" />
        </div>
      </div>
    </div>
  );
};
