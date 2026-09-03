import { OTPForm } from "@/components/auth/forms/otpform";
import { ResetPasswordForm } from "@/components/auth/forms/PasswordReset";
import React from "react";

const ForgotPasswordOTP = () => {
  return (
    <div className="mt-(--mobile-nav-height) md:mt-[calc(var(--nav-height)+24px)] ">
      <ResetPasswordForm />
    </div>
  );
};

export default ForgotPasswordOTP;
