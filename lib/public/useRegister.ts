import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { apiClient } from "../api";
import {
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  LoginPayload,
  LoginResponse,
  LogoutResponse,
  OTPPayload,
  OTPResendPayload,
  OTPResendResponse,
  OTPResponse,
  RegistrationPayload,
  RegistrationResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
} from "../types/auth";
import { ErrorType } from "../defined_types";

async function registerUser(
  payload: RegistrationPayload,
): Promise<RegistrationResponse> {
  try {
    const { data } = await apiClient.post<RegistrationResponse>(
      "/auth/register",
      payload,
    );
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.response?.data.message ?? "Registration failed");
    }
    throw new Error("Something went wrong. Please try again.");
  }
}

async function otpVerification(payload: OTPPayload): Promise<OTPResponse> {
  try {
    const { data } = await apiClient.post<OTPResponse>(
      "/auth/otp/verify",
      payload,
    );
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.response?.data.message ?? "OTP Verification Failed");
    }
    throw new Error("Something went wrong. Please try again.");
  }
}

async function otpResend(
  payload: OTPResendPayload,
): Promise<OTPResendResponse> {
  try {
    const { data } = await apiClient.post("/auth/otp/resend", payload);
    return data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw new Error("Something went wrong !!");
    }
    throw new Error("Something went wrong !!");
  }
}

async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  try {
    const { data } = await apiClient.post<LoginResponse>(
      "/auth/login",
      payload,
    );
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.response?.data.message ?? "Login failed");
    }
    throw new Error("Something went wrong!");
  }
}

async function forgotPassword(
  payload: ForgotPasswordPayload,
): Promise<ForgotPasswordResponse> {
  try {
    const { data } = await apiClient.post<ForgotPasswordResponse>(
      "/auth/forgot-password",
      payload,
    );
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Error submitting phone");
    }
    throw new Error("Sorry something went wrong");
  }
}

async function resetPassword(
  payload: ResetPasswordPayload,
): Promise<ResetPasswordResponse> {
  try {
    const { data } = await apiClient.post<ResetPasswordResponse>(
      "/auth/reset-password",
      payload,
    );
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Something went wrong");
    }
    throw new Error("Something went wrong");
  }
}

async function logoutUser(): Promise<LogoutResponse> {
  try {
    const { data } = await apiClient.post<LogoutResponse>("/auth/logout");
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Failed to logout user");
    }
    throw new Error("Failed to logout user");
  }
}

export function useForgotPassword() {
  return useMutation<ForgotPasswordResponse, Error, ForgotPasswordPayload>({
    mutationFn: forgotPassword,
    mutationKey: ["forgot_password"],
  });
}

export function useRegister() {
  return useMutation<RegistrationResponse, Error, RegistrationPayload>({
    mutationKey: ["register_user"],
    mutationFn: registerUser,
  });
}

export function useOtp() {
  return useMutation<OTPResponse, Error, OTPPayload>({
    mutationKey: ["otp_verification"],
    mutationFn: otpVerification,
  });
}

export function useOtpResend() {
  return useMutation<OTPResendResponse, Error, OTPResendPayload>({
    mutationKey: ["otp_resend"],
    mutationFn: otpResend,
  });
}

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: loginUser,
    mutationKey: ["user_login"],
  });
}

export function useResetPassword() {
  return useMutation<ResetPasswordResponse, Error, ResetPasswordPayload>({
    mutationFn: resetPassword,
    mutationKey: ["reset_password"],
  });
}

export function useLogout() {
  return useMutation<LogoutResponse, Error, null>({
    mutationFn: logoutUser,
    mutationKey: ["logout_user"],
  });
}
