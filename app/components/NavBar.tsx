"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import prisma from "../utils/db";
import HomeButton from "./HomeButton";
import { Children } from "react";

interface linkProps {
  name: string;
  uri: string;
}
/*
async function getMenus() {
    const data = await prisma.menu.findMany({
        select:{
            id : true,
            name: true,
            uri: true,
        },
        orderBy:{
            id: 'asc',
        },
    });
    return data;
}
*/
export default async function Navbar() {
  const pathName = usePathname();
  const links: linkProps[] = [{ name: "Name1", uri: "/MyLession" }];
  //const links : linkProps[] = await getMenus();

  return (
    <div className="absolute left-4 top-4 md:left-10 md:top-6 text-4xl font-extrabold text-white/60 tracking-tight lg:text-5xl">
      <HomeButton />
    </div>
  );
}
