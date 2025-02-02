import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NextAuthProvider from "./components/Providers";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-white">
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
