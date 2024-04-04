import MobileHeader from "./_components/MobileHeader";
import Sidebar from "./_components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-64 h-full pt-[50px] lg:pt-0">
        <div className="bg-sky-400 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
