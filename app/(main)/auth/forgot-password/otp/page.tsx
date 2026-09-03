import { OTPForm } from "@/components/auth/forms/otpform";
import {
  ResetPasswordBlock,
  ResetPasswordForm,
} from "@/components/auth/forms/PasswordReset";
import React from "react";

const ForgotPasswordOTP = () => {
  return (
    <div className="mt-(--mobile-nav-height) md:mt-[calc(var(--nav-height)+24px)] ">
      <ResetPasswordBlock />
    </div>
  );
};

export default ForgotPasswordOTP;
