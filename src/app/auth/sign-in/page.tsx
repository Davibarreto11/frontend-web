"use client";
import Image from "next/image";

import Logo from "../../../assets/logo.png";
import Background from "../../../assets/background-login.png";
import Ilustration from "../../../assets/ilust.svg";
import { SignInForm } from "./sign-in-form";

export default function Login() {
  return (
    <div className="flex w-4/5 h-[80vh] items-center p-6 sm:p-8">
      <div className=" max-w-md w-full rounded-lg  p-6 sm:px-12 sm:py-9">
        <div className="mb-10 w-20 text-center">
          <Image src={Logo} alt="jom" className="h-8 mx-auto" />
        </div>
        <h1 className=" text-2xl font-bold mb-2">
          Olá,<br></br> Seja Bem Vindo
        </h1>
        <p className="text-xs text-gray-500 mb-10">
          Seja bem vindo ao melhor app de gestão
        </p>

        <SignInForm />
      </div>

      <div className="flex items-center justify-center relative w-full">
        <Image
          alt="Background"
          src={Background}
          className="w-full h-full object-cover"
        />
        <Image
          alt="Ilustration"
          src={Ilustration}
          className="absolute w-[60%] h-auto left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
}
