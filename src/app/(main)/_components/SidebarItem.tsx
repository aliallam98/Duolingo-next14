"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface IProps {
  label: string;
  imageSrc: string;
  href: string;
}

const SidebarItem = ({ href, imageSrc, label }: IProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === href ? "sidebarOutline" : "sidebar"}
      className=" h-[52px] flex items-center justify-start"
    >
      <Image
        src={imageSrc}
        width={32}
        height={32}
        alt="sidebarImage"
        className="mr-4"
      />

      {label}
    </Button>
  );
};

export default SidebarItem;
