import { Footer } from "@/components/dynamiComponents";

export default function AccountLayout({ children }) {
  return (
    <main>
      {/* <ProfileHeader /> */}
      {children}
      <Footer />
    </main>
  );
}
