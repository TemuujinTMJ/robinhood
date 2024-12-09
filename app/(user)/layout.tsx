import Protected from "./protected";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Protected>
      <div className="min-h-full flex flex-col justify-between">
        <main className="pt-24">{children}</main>
      </div>
    </Protected>
  );
}
