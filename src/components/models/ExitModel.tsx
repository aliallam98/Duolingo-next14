"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useExitModel } from "@/store/exit-model";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
const ExitModel = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModel();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-5 w-full">
            <Image
              src={"/mascot_sad.svg"}
              alt="mascot"
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wait, Don&apos;t Go!
          </DialogTitle>
          <DialogDescription>
            You&apos;re about to leave the lesson. Are you sure ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="w-full space-y-4 flex flex-col">
            <Button
              className="w-full"
              variant={"primary"}
              size={"lg"}
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              className="w-full"
              variant={"dangerOutline"}
              size={"lg"}
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExitModel;
