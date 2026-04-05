import "./globals.css";

export const metadata = {
  title: "NextFlow",
  description: "AI Workflow Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}