import { ForgotPasswordBlock } from "@/components/auth/forms/ForgotPassword";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="mt-(--mobile-nav-height) md:mt-[calc(var(--nav-height)+24px)] ">
      <ForgotPasswordBlock />
    </div>
  );
};

export default ForgotPasswordPage;
