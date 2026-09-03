import { LoaderCircle } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

export const Loader = () => {
  return (
    <HugeiconsIcon
      icon={LoaderCircle}
      size={12}
      strokeWidth={2}
      className="animate-spin"
    />
  );
};
