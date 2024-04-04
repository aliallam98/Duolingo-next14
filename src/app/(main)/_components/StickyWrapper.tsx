interface IProps {
  children: React.ReactNode;
}
const StickyWrapper = ({ children }: IProps) => {
  return (
    <div className="hidden lg:block sticky w-[368px] self-end bottom-6">
      <div className="sticky top-6 flex flex-col min-h-[calc(100vh-48px)] gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
