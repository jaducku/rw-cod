import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import NavBar from "../components/nav-bar";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  /*
    if(!session){
        return redirect("/login");
    }
    */
  return (
    <>
      <main className="w-full max-w-8xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
