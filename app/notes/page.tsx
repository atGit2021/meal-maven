import Link from "next/link";

export default function Notes() {
  return (
    <main>
      <h1>Notes</h1>
      <p>
        <Link href="/notes/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/notes/post-2">Post 2</Link>
      </p>
    </main>
  );
}
