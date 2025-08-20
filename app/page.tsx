import Link from "next/link";
import Header from "./header";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center gap-[8px] row-start-2">
        <Header />
        <Link href="/about">About Meal Maven</Link>
      </main>
    </div>
  );
}
