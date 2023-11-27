"use client";
import Input from "@/app/components/Input/page";
import { useState, useCallback } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

type Varient = "Login" | "Register";

export default function AuthForm() {
  const [varient, setVarient] = useState<Varient>("Register");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVarient = useCallback(() => {
    if (varient === "Login") {
      setVarient("Register");
    } else {
      setVarient("Login");
    }
  }, [varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (varient === "Register") {
      //            Register
    } else {
      //       NextAuth Login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //        Social Sign In
  };

  return (
    <div
      className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
  "
    >
      <div
        className="
    bg-white
    px-4
    py-8
    shadow
    sm:rounded-lg
    sm:px-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" id="email" />
        </form>
      </div>
    </div>
  );
}
