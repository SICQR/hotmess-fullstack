import "@hotmess/design-system/philip-gizzie-theme/tokens.scss";
import "./globals.css";
import "../styles/hotmess.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayerDock from "../components/PlayerDock";
import CookieBanner from "../components/CookieBanner";
import { ThemeToggler } from "@hotmess/design-system";
import ToastContainer from "../components/ToastContainer";

export const metadata = {
  title: "HOTMESS London",
  description: "Always too much, never enough.",
  url: "https://hotmess.london",
  image: "/og-image.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#FF5300" />
        <link href="https://api.fontshare.com/v2/css?f[]=anton@1&display=swap" rel="stylesheet" />
        {/* Open Graph / Twitter */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        {/* Analytics placeholder */}
        {/* <script src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXX-X" async /> */}
        {/* <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}`}</script> */}
      </head>
      <body className="hm-scope">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
  <ThemeToggler />
  <ToastContainer />
        <main id="main">{children}</main>
        <Footer />
        <PlayerDock />
        <CookieBanner />
      </body>
    </html>
  );
}
