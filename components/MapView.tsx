"use client";

import dynamic from "next/dynamic";
import type { Place } from "./Map";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-125 w-full items-center justify-center text-sm text-muted-foreground">
      Loading map…
    </div>
  ),
});

export default function MapView({ lat, lng, label }: Place) {
  return (
    <div className="h-125 w-full  rounded-lg overflow-hidden">
      <Map lat={lat} lng={lng} label={label} />
    </div>
  );
}
