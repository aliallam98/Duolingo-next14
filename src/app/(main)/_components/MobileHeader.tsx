import MobileSidebar from "./MobileSidebar";

const MobileHeader = () => {
  return (
    <header className="flex lg:hidden">
      <nav className="container bg-yellow-500 fixed top-0 w-full h-[50px] flex items-center z-50">
        <MobileSidebar/>
      </nav>
    </header>
  );
};

export default MobileHeader;
