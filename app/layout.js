import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "../lib/siteData";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
document.addEventListener('click', async function(event) {
  const button = event.target.closest('[data-code]');
  if (!button) return;
  const code = button.getAttribute('data-code');
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = 'Copied';
    setTimeout(function(){ button.textContent = 'Copy'; }, 1400);
  } catch (error) {
    button.textContent = code;
  }
});
`,
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-Y2KMHSRQCK" />
    </html>
  );
}
