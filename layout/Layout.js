import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({ headerData, children }) {
  return (
    <>
      <Header data={headerData} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
