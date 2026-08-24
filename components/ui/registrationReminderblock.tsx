import React from "react";
import { Button } from "./button";

export const RegistrationReminderBlock = () => {
  return (
    <div className="p-6 flex text-center rounded-2xl flex-col gap-2 border items-center justify-center border-primary bg-primary/10">
      <p className="text-xs">
        Register and earn free tokens on each transaction
      </p>
      <Button className={"w-full p-4"}>Register Now</Button>
    </div>
  );
};
