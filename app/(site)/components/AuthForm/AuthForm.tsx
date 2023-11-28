"use client";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
import { useState, useCallback } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "../AuthSocialButton/AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Varient = "Login" | "Register";

export default function AuthForm() {
  const [varient, setVarient] = useState<Varient>("Login");
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
    console.log(data);
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
          {varient === "Register" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {varient === "Login" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {varient === "Login"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <p onClick={toggleVarient} className="underline cursor-pointer">
            {varient === "Login" ? "Create an account" : "Login"}
          </p>
        </div>
      </div>
    </div>
  );
}
