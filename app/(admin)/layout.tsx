import AdminMenu from "@/components/AdminMenu";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex">
        <AdminMenu />
        <div className="p-4 flex-1">{children}</div>
      </div>
    );
  }
  