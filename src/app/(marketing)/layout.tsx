import Footer from "./_components/Footer";
import Header from "./_components/Header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
