import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center gap-[8px] row-start-2">
        <Image
          className="dark"
          src="/logo.png"
          alt="logo"
          width={380}
          height={380}
          priority
        />
        <h1 className="text-4xl font-bold text-center text-purple-500">
          Welcome to the Smart Pantry
        </h1>
      </main>
    </div>
  );
}
