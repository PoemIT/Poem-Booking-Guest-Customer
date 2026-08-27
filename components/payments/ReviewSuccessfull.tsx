import {
  BankFreeIcons,
  CircleAlert,
  CircleCheck,
  CircleFreeIcons,
  Clock02FreeIcons,
  Lock,
  Sidebar,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { Button } from "../ui/button";

const ReviewFailed = () => {
  return (
    <div className="bg-white border-border border p-6 rounded-2xl flex flex-col gap-6 items-center justify-center">
      <div className="w-18 h-18 rounded-full flex items-center justify-center bg-destructive/20 text-destructive">
        <HugeiconsIcon
          icon={CircleAlert}
          size={12}
          className="w-12 h-12"
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xl font-bold">Oops! Something went wrong</span>
        <p className="text-muted-foreground">
          We couldn't submit your review at this time. Please try again or
          contact support if the issue persists.
        </p>
      </div>
      <div className="flex gap-4 w-full items-center">
        <Button className={"h-10 flex-1"}>Try Again</Button>
        <Button className={"h-10 flex-1"} variant={"outline"}>
          Go to support
        </Button>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <span className="text-muted-foreground flex items-center gap-1 text-xs">
          <HugeiconsIcon icon={Lock} size={12} />
          SECURE TRANSMISSION
        </span>
        <span className="text-muted-foreground flex items-center gap-1 text-xs">
          <HugeiconsIcon icon={Clock02FreeIcons} size={12} />
          AUTO - SAVED DRAFT
        </span>
      </div>
    </div>
  );
};

const ReviewSuccessfull = () => {
  return (
    <div className="p-6 w-full max-w-md flex flex-col gap-6 items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-primary/50 flex items-center justify-center">
        <HugeiconsIcon
          icon={CircleCheck}
          className="text-primary w-16 h-16"
          size={30}
        />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xl font-bold">Review Submitted</span>
        <p className="text-muted-foreground">
          Thank you for your feedback! 500 POEM Tokens have been added to your
          wallet as a token of our appreciation.
        </p>
      </div>
      <div className="w-full rounded-md border border-border p-4 flex items-center justify-center gap-2">
        <div className="p-2 rounded-md bg-secondary-foreground">
          <HugeiconsIcon
            icon={CircleFreeIcons}
            // size={12}
            className="text-white w-6 h-6"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">CURRENT BALANCE</span>
          <span className="font-bold">1,250 POEM Tokens</span>
        </div>
      </div>
      <div className="flex items-center w-full gap-4">
        <Button className={"h-10 flex-1"}>
          <HugeiconsIcon icon={BankFreeIcons} size={16} />
          View my token
        </Button>
        <Button variant={"outline"} className={"h-10 flex-1"}>
          <HugeiconsIcon icon={Sidebar} size={16} />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export const ReviewStates = () => {
  return <ReviewFailed />;
};
