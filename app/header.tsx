import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image
        className="dark"
        src="/logo.png"
        alt="logo"
        width={380}
        height={380}
        priority
      />
      <h1>Meal Maven</h1>
    </>
  );
}
