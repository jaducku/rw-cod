import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/background.png";
import HomeButton from "../components/HomeButton";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <div className="absolute top-6 md:top-6 text-4xl font-extrabold text-white/60 tracking-tight lg:text-6xl">
        <HomeButton />
      </div>
      {children}
    </div>
  );
}
