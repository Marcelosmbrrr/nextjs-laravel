import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>

      {children}
    </div>
  );
}
