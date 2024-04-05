import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface IProps {
  id: number;
  title: string;
  imageSrc: string;
  onclick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
}
const Card = ({ id, imageSrc, onclick, title, active, disabled }: IProps) => {
  return (
    <div
      onClick={() => onclick(id)}
      className={cn(
        "relative h-full min-h-[215px] min-w-[200px] border-2 border-b-4 rounded-xl hover:bg-black/5 cursor-pointer flex flex-col justify-center items-center active:border-b-2 p-3  ",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="absolute top-4 right-4 size-fit w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 p-2 flex justify-center items-center">
            <Check className="size-4 text-white stroke-[4]" />
          </div>
        )}
      </div>

      <Image
        src={imageSrc}
        alt={title}
        width={90}
        height={70}
        className="border object-cover rounded-lg drop-shadow-md"
      />
      <p className="text-neutral-700 text-center">{title}</p>
    </div>
  );
};

export default Card;
