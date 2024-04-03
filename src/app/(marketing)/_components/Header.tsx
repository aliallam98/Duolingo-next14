import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 border-b-2 border-slate-200 p-4">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image width={40} height={40} src="/mascot.svg" alt="mascot" />
          <h1 className="text-green-600 font-bold tracking-wide">Lingo</h1>
        </div>
        <ClerkLoading>
          <Loader className="size-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton
            mode="modal"
            afterSignInUrl="/learn"
            afterSignUpUrl="/learn"
            >
              <Button size={"lg"} variant={"ghost"}>
                login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </nav>
    </header>
  );
};

export default Header;
