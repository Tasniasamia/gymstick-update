import Header from "@/app/components/(site)/layout/header";
import Footer from "@/app/components/(site)/layout/footer";

export const metadata = {
  title: "GymStick Pro",
  description: "GymStick Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
