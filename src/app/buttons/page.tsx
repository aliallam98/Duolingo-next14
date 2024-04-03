import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-10 mt-10">
      <Button variant={"default"}>Default</Button>
      <Button variant={"primary"}>Primary </Button>
      <Button variant={"primaryOutline"}>Primary outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"secondaryOutline"}>secondaryOutline</Button>
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>dangerOutline</Button>
      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>superOutline</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebarOutline</Button>

    </div>
  );
};

export default page;
