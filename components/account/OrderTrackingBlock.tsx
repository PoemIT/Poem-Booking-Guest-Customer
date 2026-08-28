"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Tick02FreeIcons,
  RestaurantTableFreeIcons,
  DeliveryTruck01FreeIcons,
  HelpCircleFreeIcons,
  Location01FreeIcons,
  BikeFreeIcons,
  Star,
  PhoneCall,
  Message01Icon,
} from "@hugeicons/core-free-icons";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

type StepDefinition = {
  label: string;
  icon: typeof Tick02FreeIcons;
  message: string;
};

const STEPS: StepDefinition[] = [
  {
    label: "Order Placed",
    icon: Tick02FreeIcons,
    message:
      "We've received your order and are waiting for the restaurant to confirm.",
  },
  {
    label: "Accepted",
    icon: Tick02FreeIcons,
    message:
      "The restaurant has accepted your order and will start preparing it shortly.",
  },
  {
    label: "Preparing",
    icon: RestaurantTableFreeIcons,
    message: "Your food is being freshly prepared in the kitchen.",
  },
  {
    label: "On the Way",
    icon: DeliveryTruck01FreeIcons,
    message: "Your rider has picked up the order and is heading your way.",
  },
  {
    label: "Delivered",
    icon: Tick02FreeIcons,
    message: "Your order has been delivered. Enjoy your meal!",
  },
];

const orderItems = [
  {
    quantity: 2,
    name: "Poulet DG Signature",
    price: "12,500 XAF",
    note: "NO ONIONS, RARE",
  },
  {
    quantity: 1,
    name: "Parmesan Herb Fries",
    price: "2,500 XAF",
    note: "EXTRA AIOLI",
  },
  {
    quantity: 1,
    name: "Homemade Lemonade",
    price: "1,500 XAF",
    note: "LARGE, NO ICE",
  },
];

const ON_THE_WAY_INDEX = 3;

export function OrderStatusPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const progressPercent = (currentStep / (STEPS.length - 1)) * 100;
  const isOnTheWay = currentStep === ON_THE_WAY_INDEX;

  return (
    <div className="min-h-screen bg-muted/30 p-6 md:p-10 mt-[calc(var(--nav-height)+20px)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 max-w-6xl mx-auto">
        {/* Left: Order status */}
        <Card className="p-8 rounded-2xl">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                {currentStep === STEPS.length - 1
                  ? "Your order has been delivered"
                  : "Your order has been placed"}
              </h1>
              <p className="text-muted-foreground mt-1">
                Estimated arrival:{" "}
                <span className="text-amber-600 font-medium">
                  {currentStep === 0 ? "Awaiting confirmation" : "25–35 mins"}
                </span>
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground tracking-wide">
                ORDER ID
              </p>
              <span className="inline-block mt-1 px-3 py-1 rounded-md border border-primary/40 bg-primary/5 font-mono font-semibold text-sm">
                #PF-88294-DLA
              </span>
            </div>
          </div>

          {/* Stepper */}
          <div className="mt-10">
            <div className="relative">
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-border" />
              <div
                className="absolute top-5 left-5 h-0.5 bg-foreground transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />

              <div className="relative flex justify-between">
                {STEPS.map((step, i) => {
                  const status =
                    i < currentStep
                      ? "done"
                      : i === currentStep
                        ? "active"
                        : "upcoming";

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentStep(i)}
                      className="flex flex-col items-center gap-2 w-20"
                    >
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                          status === "done" || status === "active"
                            ? "bg-amber-800 text-white"
                            : "bg-muted text-muted-foreground border border-border"
                        }`}
                      >
                        <HugeiconsIcon icon={step.icon} size={18} />
                      </div>
                      <span
                        className={`text-xs text-center font-medium ${
                          status === "done" || status === "active"
                            ? "text-amber-800"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Message or map, depending on step */}
          <div className="mt-10 pt-6 border-t border-border">
            {isOnTheWay ? (
              <div className="flex flex-col gap-6">
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="relative h-56 bg-muted flex items-center justify-center">
                    {/* Swap this block for your actual map component (Mapbox/Google Maps) */}
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <HugeiconsIcon icon={Location01FreeIcons} size={28} />
                      <span className="text-sm">Live map view</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 px-4 py-3 bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-800 mt-2 shrink-0" />
                    <p className="text-sm">{STEPS[currentStep].message}</p>
                  </div>
                </div>
                <div className="bg-white rounded-md p-4 shadow-md w-full flex justify-between items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar className={"w-17 h-17"}>
                      <AvatarFallback>PC</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-[16px]">Moussa</span>
                      <span className="flex gap-1">
                        <HugeiconsIcon icon={BikeFreeIcons} size={16} />
                        White Sanya Moto
                      </span>
                      <span className="flex items-center text-xs font-bold gap-1">
                        <HugeiconsIcon
                          icon={Star}
                          className="text-yellow-500 fill-yellow-500"
                          size={12}
                        />
                        4.9 (2k+ deliveries)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={"outline"} className={"p-4 px-6"}>
                      <HugeiconsIcon icon={PhoneCall} />
                      Call
                    </Button>
                    <Button
                      className={"p-4 bg-green-500 hover:bg-green-500/90 px-6"}
                    >
                      <HugeiconsIcon icon={Message01Icon} />
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-800 mt-2 shrink-0" />
                <p className="text-sm">{STEPS[currentStep].message}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Right: Order summary */}
        <Card className="p-6 rounded-2xl h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="flex flex-col gap-4">
            {orderItems.map((item, i) => (
              <div key={i} className="flex justify-between gap-2">
                <div>
                  <p className="text-sm">
                    <span className="text-amber-800 font-semibold mr-1">
                      {item.quantity}x
                    </span>
                    <span className="font-semibold">{item.name}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.note}
                  </p>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>16,500 XAF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>1,000 XAF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service Fee</span>
              <span>500 XAF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-amber-800">Promotional Discount</span>
              <span className="text-amber-800">-1,500 XAF</span>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-slate-800 text-white px-4 py-4 flex items-center justify-between">
            <span className="font-medium">Total Paid</span>
            <span className="text-lg font-bold">16,500 XAF</span>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            PAID VIA ORANGE MONEY • 12:15 PM
          </p>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-2 mt-10 text-sm text-muted-foreground">
        <HugeiconsIcon icon={HelpCircleFreeIcons} size={16} />
        <span>Need help with your order?</span>
      </div>
    </div>
  );
}
