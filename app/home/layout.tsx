// app/(home)/layout.tsx
import FloatingNav from "@/components/FloatingNav";
import SplashScreen from "@/components/SplashScreen";

export default function HomeGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SplashScreen /> 
      <FloatingNav />
      {children}
    </>
  );
}
