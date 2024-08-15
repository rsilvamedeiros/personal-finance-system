import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <Link href="/">Dashboard</Link>
            </li>
            <li className="mb-2">
              <Link href="/receitas">Receitas</Link>
            </li>
            <li className="mb-2">
              <Link href="/despesas">Despesas</Link>
            </li>
            <li className="mb-2">
              <Link href="/relatorios">Relatórios</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
