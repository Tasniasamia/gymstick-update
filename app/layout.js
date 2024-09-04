import "./globals.scss";

export const metadata = {
  title: "GymStick Pro",
  description: "GymStick Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
