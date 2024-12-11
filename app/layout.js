import "./globals.css";
import Theme from "@/components/Theme";
import ThemeSwitch from "@/components/ThemeSwitch";

export const metadata = {
  title: "Wikan Portfolio",
  description: "This is Wikan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Theme>
          <ThemeSwitch />
          {children}
        </Theme>
      </body>
    </html>
  );
}
