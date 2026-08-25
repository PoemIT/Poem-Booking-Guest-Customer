import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertTriangle,
  Bed,
  Box,
  BusFront,
  NoMeetingRoomIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import Link from "next/link";

export const EmptyHotelsRooms = () => {
  return (
    <div className="mt-[20px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={NoMeetingRoomIcon} size={40} />
          </EmptyMedia>
          <EmptyTitle>Hotel Room not found</EmptyTitle>
          <EmptyDescription>
            No room currently availability to match your specifications
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
};

export const EmptyBusRoutes = () => {
  return (
    <div className="mt-[20px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={BusFront} size={40} />
          </EmptyMedia>
          <EmptyTitle>Bus route not found</EmptyTitle>
          <EmptyDescription>
            There are no available bus routes with your defined specification.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
};

export const EmptyApartments = () => {
  return (
    <div className="mt-[20px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Bed} size={40} />
          </EmptyMedia>
          <EmptyTitle>No Apartments Found</EmptyTitle>
          <EmptyDescription>
            There are no available apartments routes with your defined
            specification.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
};

export const EmptyRestaurants = () => {
  return (
    <div className="mt-[20px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Bed} size={40} />
          </EmptyMedia>
          <EmptyTitle>No Restaurants Found</EmptyTitle>
          <EmptyDescription>
            Seems like an error occured while fetching your restaurants.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
};

export const EmptyCart = () => {
  return (
    <div className="mt-[4px]">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Box} size={40} />
          </EmptyMedia>
          <EmptyTitle>Cart Empty</EmptyTitle>
          <EmptyDescription>
            Your cart seems to be empty. Kindly check out the restaurant and get
            it filled.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link href={"/restaurants"}>
            <Button variant={"link"}>Go to Restaurants</Button>
          </Link>
        </EmptyContent>
      </Empty>
    </div>
  );
};
