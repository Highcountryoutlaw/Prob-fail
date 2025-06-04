import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider activeChain="ethereum">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
