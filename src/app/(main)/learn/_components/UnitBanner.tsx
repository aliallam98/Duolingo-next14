import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

interface IProps {
  description: string;
  title: string;
}

const UnitBanner = ({ description, title }: IProps) => {
  return (
    <div className="bg-green-500 w-full rounded-md p-5 text-white flex justify-between items-center">
      <div className="space-y-2.5">
        <h3 className="text-2xl text-bold">{title}</h3>
        <p className="text-lg ">{description}</p>
      </div>

      <Link href={"/lessons"}>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="hidden xl:flex border-2 border-b-4  active:border-b-2"
        >
          <NotebookText className="mr-2" />
          continue
        </Button>
      </Link>
    </div>
  );
};

export default UnitBanner;
