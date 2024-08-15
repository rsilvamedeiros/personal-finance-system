const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">Dashboard</li>
            <li className="mb-2">Receitas</li>
            <li className="mb-2">Despesas</li>
            <li>Relatórios</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
