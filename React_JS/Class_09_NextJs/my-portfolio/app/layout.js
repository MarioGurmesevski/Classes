import "./globals.css";

export const metadata = {
  title: "Mario Gurmesevski Portfolio",
  description: "The portfolio for Mario Fullstack Web Devloper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
