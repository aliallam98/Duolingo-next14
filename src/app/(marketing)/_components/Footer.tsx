import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 border-t-2 border-slate-200">
      <div className="container flex justify-evenly items-center h-full">
        <Button className="w-full" variant={"ghost"} size={"lg"}>
          <Image
            width={60}
            height={60}
            alt="english"
            src={"/en.jpg"}
            className="rounded-md mr-4"
          />
          English
        </Button>

        <Button className="w-full" variant={"ghost"} size={"lg"}>
          <Image
            width={40}
            height={40}
            alt="Spanish"
            src={"/es.svg"}
            className="rounded-md mr-4"
          />
          Spanish
        </Button>
        <Button className="w-full" variant={"ghost"} size={"lg"}>
          <Image
            width={40}
            height={40}
            alt="French"
            src={"/fr.svg"}
            className="rounded-md mr-4"
          />
          French
        </Button>
        <Button className="w-full" variant={"ghost"} size={"lg"}>
          <Image
            width={40}
            height={40}
            alt="english"
            src={"/it.svg"}
            className="rounded-md mr-4"
          />
          Italian
        </Button>
        <Button className="w-full" variant={"ghost"} size={"lg"}>
          <Image
            width={40}
            height={40}
            alt="english"
            src={"/jp.svg"}
            className="rounded-md mr-4"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
