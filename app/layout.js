import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "/components/TopNav";
import { Toaster } from "react-hot-toast";



export const metadata = {
  title: "Next Authentication",
  description: "Authentication using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav/>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
