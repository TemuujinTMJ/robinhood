import AdminMenu from "@/components/AdminMenu";
import Protected from "./protected";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Protected>
      <div className="flex min-h-full" style={{ height: "calc(100vh - 185px)" }}>
        <AdminMenu />
        <div className="p-4 flex-1">{children}</div>
      </div>
    </Protected>
  );
}
