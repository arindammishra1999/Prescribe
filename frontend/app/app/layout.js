import localFont from "next/font/local";
import "./globals.css";
import { Fredoka } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const sfProDisplay = localFont({
  src: "/fonts/SF-Pro-Display-Regular.otf",
  weights: [400],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main className={`${sfProDisplay.className} ${fredoka.variable}`}>
        {children}
      </main>
    </html>
  );
}
