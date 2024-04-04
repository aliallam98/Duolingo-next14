import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface IProps {
  title: string;
}
const FeedHeader = ({ title }: IProps) => {
  return (
    <div className="sticky top-0 flex items-center justify-between bg-white text-neutral-400 border-b-2 mb-5 pb-4 lg:pt-7 lg:-mt-7">
      <Link href={"/courses"}>
        <Button variant={"ghost"} size={"sm"}>
          <ArrowLeft className="size-5 text-neutral-400 stroke-2" />
        </Button>
      </Link>
      <h1 className="text-xl font-bold">{title}</h1>
      <div />
    </div>
  );
};

export default FeedHeader;
