import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-amber-200/10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start h-screen">
        <div className="h-screen">
          <p className="text-red-800 text-16 ">hello world</p>
          <input type="text" className="input-class" />
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
