"use client";
import { Button } from "@/components/ui/button";
import { OtpInput } from "@/components/ui/otpinput";
import {
  useOtp,
  useOtpResend,
  useResetPassword,
} from "@/lib/public/useRegister";
import {
  OTPPayload,
  OTPResendPayload,
  ResetPasswordPayload,
} from "@/lib/types/auth";
import { Lock } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader } from "@/components/ui/Loader";
import { useTokens } from "@/lib/useTokens";
import { Input } from "@/components/ui/input";

export const ResetPasswordForm = () => {
  const second = 30;
  const [refreshTime, setRefreshTime] = useState<number>(second);
  const [timeExpired, setTimeExpired] = useState<boolean>(false);
  const { mutate, isPending } = useResetPassword();
  const { mutate: ResendMutate, isPending: Resending } = useOtpResend();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setTokens } = useTokens();

  const phoneNumber = searchParams.get("phoneNumber");

  const initialData: ResetPasswordPayload = {
    phoneNumber: phoneNumber ?? "",
    otp: "",
    newPassword: "",
  };

  const [formData, setFormData] = useState<ResetPasswordPayload>(initialData);

  const handleOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (response) => {
        toast.success(response.data.message);
        router.push("/auth");
      },
      onError: (e) => {
        toast.error(e.message ?? "Password reset failed");
      },
    });
  };

  //   useEffect(() => {
  //     if (refreshTime > 0) {
  //       const interval = setInterval(() => {
  //         setRefreshTime(refreshTime - 1);
  //       }, 1000);

  //       return () => clearInterval(interval);
  //     } else {
  //       setTimeExpired(true);
  //     }
  //   }, [refreshTime]);

  return (
    <form onSubmit={handleOnSubmit} className="">
      <div className="form-block flex flex-col items-center justify-center">
        <div className="size-20 flex items-center justify-center rounded-full bg-primary/10">
          <HugeiconsIcon icon={Lock} className="text-primary" size={34} />
        </div>
        <div className="flex flex-col gap-1.5 text-center">
          <span className="text-2xl font-bold">Confirm Your Identity</span>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to your registered phone
            number.
          </p>
        </div>
        <OtpInput
          onComplete={(code) => setFormData((prev) => ({ ...prev, otp: code }))}
        />
        <div className="flex flex-col w-full gap-0.5">
          <label className="text-xs text-muted-foreground">New Password</label>
          <Input
            disabled={isPending}
            name="newPassword"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
            }
            value={formData.newPassword}
            placeholder="New Password"
            className="h-10"
            type="password"
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className={"rounded-md p-6 w-full text-[14px]"}
        >
          {isPending ? <Loader /> : "Reset Password"}
        </Button>

        {/* <div className="flex text-xs flex-col gap-0.5 items-center justify-center">
          <span>
            Can resend code until:{" "}
            <span className="text-primary font-bold">{refreshTime}</span>
          </span>
          <span className=" text-muted-foreground mt-1">
            Didn't receive the code or code expired ?
          </span>
          <div className="flex gap-2 items-center w-fit mx-auto">
            <Button
              onClick={() => handleResendOtp()}
              disabled={!timeExpired}
              variant={"link"}
            >
              Resend Code
            </Button>
            {Resending ? <Loader /> : ""}
          </div>
        </div> */}
      </div>
    </form>
  );
};
