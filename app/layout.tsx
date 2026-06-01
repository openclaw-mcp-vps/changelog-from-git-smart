import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitChangelog — Customer-Facing Changelogs from Git Commits",
  description: "Automatically generate marketing-friendly changelogs from your git commits. AI-powered categorization for product managers and indie hackers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5ff3c912-d211-4429-b2e5-8d6cb62109ca"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
