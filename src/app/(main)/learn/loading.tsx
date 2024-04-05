import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="size-full flex items-center justify-center">
      <Loader className="size-8 text-muted-foreground animate-spin" />
    </div>
  );
};

export default loading;
