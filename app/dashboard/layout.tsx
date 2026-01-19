// common layout for dashboard route

import Link from "next/link";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <aside className="w-64 border-r p-4">
          <h2 className="bg-red-700 text-2xl mb-4">Dashboard</h2>
          <nav>
            <ul>
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>

              <li>
                <Link href={"/dashboard/analytics"}>Analytics</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex p-5">
            {children}
        </div>
      </div>
    </div>
  );
}
