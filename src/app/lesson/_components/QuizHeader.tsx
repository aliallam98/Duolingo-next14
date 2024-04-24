import { Progress } from "@/components/ui/progress";
import { useExitModel } from "@/store/exit-model";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

interface IProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}

const QuizHeader = ({ hearts, percentage, hasActiveSubscription }: IProps) => {
  const { open } = useExitModel();
  return (
    <header className="pt-[20px] lg:pt-[50px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
        onClick={open}
      />
      <Progress value={percentage} />
      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src={"/heart.svg"}
          width={30}
          height={30}
          alt="heart"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="siz-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};

export default QuizHeader;
