import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import React from "react";

export const MobileFilter = () => {
  const busoperators = [
    { id: "finexs", label: "Finexs Voyages", checked: true },
    { id: "general", label: "General Express", checked: false },
    { id: "buca", label: "Buca Voyages", checked: true },
  ];
  return (
    <div className="flex flex-col md:hidden gap-4">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-[14px] text-primary uppercase">
          Departure Time
        </span>
        <div className="w-full flex flex-wrap gap-2">
          <Button className={"p-2 rounded-md h-9"}>
            Morning (06:00-12:00)
          </Button>
          <Button variant={"outline"} className={"p-2 bg-white rounded-md h-9"}>
            Afternoon (12:00-18:00)
          </Button>
          <Button variant={"outline"} className={"p-2 bg-white rounded-md h-9"}>
            Evening (18:00-00:00)
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-[14px]">Bus Operator</span>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            {busoperators.map((option) => (
              <label key={option.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => {}}
                  className="form-checkbox"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-[14px] uppercase">
          Price Range (XAF)
        </span>
        <Slider
          defaultValue={[3000, 5000]}
          max={10000}
          step={10}
          className="mx-auto w-full bg-bg-mute"
        />
        <div className="w-full flex justify-between items-center text-muted-foreground">
          <span>3,000</span>
          <span>15,000</span>
        </div>
      </div>
    </div>
  );
};
