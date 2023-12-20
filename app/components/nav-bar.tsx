
import { Search } from "../home/components/search";
import { UserNav } from "../home/components/user-nav";
import { MainNav } from "./main-nav";

export default function NavBar() {
  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
            </div>
        </div>
    </div>
  );
}


