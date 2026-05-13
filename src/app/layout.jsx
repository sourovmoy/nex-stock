import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexStock",
  description: "A stock management and POS system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
