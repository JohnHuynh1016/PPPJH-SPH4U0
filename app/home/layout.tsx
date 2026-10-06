// app/(home)/layout.tsx
import FloatingNav from "@/components/FloatingNav";

export default function HomeGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatingNav />
      {children}
    </>
  );
}
