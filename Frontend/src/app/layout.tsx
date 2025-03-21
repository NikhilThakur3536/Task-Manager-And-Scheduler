import "./globals.css";
import { k2d, montserrat,poppins,muli} from "../font";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${k2d.variable || ""} ${montserrat.variable || ""} ${poppins.variable || ""} ${muli.variable || ""}`}
    >
      <body>{children}</body>
    </html>
  );
}
