export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>inner nav bar</h1>
        {children}
    </>
  );
}