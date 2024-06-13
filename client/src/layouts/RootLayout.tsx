import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <header className="shadow bg-gray-50">
        <div className="mx-auto max-w-6xl py-5 flex justify-between items-center">
          <h1 className="text-3xl text-black font-bold">Product Manager</h1>
          <img src="/logo.png" alt="Product Manager Logo" className="w-40" />
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
        <Outlet />
      </main>
    </>
  );
};
