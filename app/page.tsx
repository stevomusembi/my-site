import NavigationArea  from "./components/nav/nav";
export default function Home() {
  const name: string = 'Steven';

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-red-500">
      <div className="w-full h-full border border-blue-500">
        <NavigationArea />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full border border-green-500">
        <span>{name}</span>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full h-full border border-yellow-500">

      </footer>
    </div>
  );
}

