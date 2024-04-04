import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}
const Sidebar = ({ className }: IProps) => {
  return (
    <aside
      className={cn(
        "lg:fixed  top-0 left-0  lg:w-64 flex flex-col border-r-2 px-4  h-full bg-red-200 ",
        className
      )}
    >
      Sidebar
    </aside>
  );
};

export default Sidebar;
