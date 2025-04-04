import "./globals.css";
export const metadata = {
  title: "Welcome to jobs Portals",
  description: "dinesh kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
