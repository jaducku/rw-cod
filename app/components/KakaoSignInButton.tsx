"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import KakaoLogo from "../../public/kakao.svg";

export default function KakaoSignInButton() {
  return (
    <div>
      <Button onClick={() => signIn("kakao")} size="icon">
        <Image src={KakaoLogo} alt="Kakao icon" className="w-6 h-6" />
      </Button>
    </div>
  );
}
