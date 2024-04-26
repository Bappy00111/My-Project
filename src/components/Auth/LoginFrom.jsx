import React from "react";
import { useForm } from "react-hook-form";
import Filed from "../common/Filed";
import { useNavigate } from "react-router-dom";

const LoginFrom = () => {
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnRegester = (fromData) => {
    console.log(fromData);
    naviget('/')
  };
  return (
    <form
      onSubmit={handleSubmit(handleOnRegester)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Filed label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`auth-input ${
            !!errors.eamail ? "border-red-600" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Filed>

      <Filed label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "password  is Required",
            minLength: {
              value: 8,
              message: "Password must be 8 characters",
            },
          })}
          className={`auth-input ${
            !!errors.password ? "border-red-600" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Filed>

      <Filed>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Filed>
    </form>
  );
};

export default LoginFrom;
