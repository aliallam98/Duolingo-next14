import { courses } from "@/DB/schema";
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: IProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            width={32}
            height={32}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md  mr-4"
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            width={32}
            height={32}
            src={"/points.svg"}
            alt={"points"}
            className="rounded-md  mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={"/courses"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            width={32}
            height={32}
            src={"/heart.svg"}
            alt={"hearts"}
            className="rounded-md  mr-2"
          />
          {hasActiveSubscription ? <InfinityIcon className="size-5" /> : hearts}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
