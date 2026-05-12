import Footer from "@/Components/Shared/Footer/Footer";
import Header from "@/Components/Shared/Header/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-15">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
