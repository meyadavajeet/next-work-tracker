import CustomHeader from "@/components/CustomHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/app/context/userProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <CustomHeader />
          <ToastContainer />
          <div>{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
