import { LoginForm } from "@/components/auth/forms/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mt-(--mobile-nav-height) md:mt-[calc(var(--nav-height)+24px)] ">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
