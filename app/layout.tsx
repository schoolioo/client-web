import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Schooliu</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
