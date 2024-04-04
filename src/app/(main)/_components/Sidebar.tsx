import { cn } from "@/lib/utils";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

interface IProps {
  className?: string;
}
const Sidebar = ({ className }: IProps) => {
  return (
    <aside
      className={cn(
        "lg:fixed  top-0 left-0  lg:w-64 flex flex-col border-r-2 px-4  h-full",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-4 flex-1 mt-8">
        <SidebarItem href="/learn" label="learn" imageSrc="/learn.svg" />
        <SidebarItem
          href="/leaderboard"
          label="leaderboard"
          imageSrc="/leaderboard.svg"
        />
        <SidebarItem href="/quests" label="quests" imageSrc="/quests.svg" />
        <SidebarItem href="/shop" label="shop" imageSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </aside>
  );
};

export default Sidebar;
