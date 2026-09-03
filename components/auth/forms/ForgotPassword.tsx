"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/Loader";
import { useForgotPassword } from "@/lib/public/useRegister";
import { ForgotPasswordPayload } from "@/lib/types/auth";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export const ForgotPasswordBlock = () => {
  const { mutate, isPending } = useForgotPassword();
  const [formData, setFormData] = useState<ForgotPasswordPayload>({
    phoneNumber: "",
  });
  const router = useRouter();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (response) => {
        toast.success(response.data.message ?? "Reset otp sent to phone");
        router.push(
          `/auth/forgot-password/otp?phoneNumber=${formData.phoneNumber}`,
        );
        setFormData({ phoneNumber: "" });
      },
      onError: (error) => {
        toast.error(error.message ?? "Couldn't send otp");
      },
    });
  };

  return (
    <div className="small-block p-4">
      <div className="form-block text-center justify-center">
        <div className="flex gap-1 flex-col">
          <span className="text-2xl font-bold">Reset Password</span>
          <p className="text-[14px] text-muted-foreground">
            Enter your Phone number and we'll send you a link to reset your
            password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            disabled={isPending}
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ phoneNumber: e.target.value })}
            placeholder="Phone Number"
            className="p-5 px-4"
          />
          <Button
            disabled={isPending}
            type="submit"
            className={"p-5 rounded-md"}
          >
            {isPending ? (
              <Loader />
            ) : (
              <>
                Send Reset Code <HugeiconsIcon icon={ArrowRight} size={20} />
              </>
            )}
          </Button>
        </form>
        <Link href={"/auth"}>
          <Button type="button" variant={"link"} className={"cursor-pointer"}>
            <HugeiconsIcon icon={ArrowLeft} size={20} /> Back to login
          </Button>
        </Link>
      </div>
    </div>
  );
};
