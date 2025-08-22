interface NotePageProps {
  params: {
    note: string;
  };
}

export default function Note({ params }: NotePageProps) {
  return (
    <main>
      <h1>My Note</h1>
      <p>{params.note}</p>
    </main>
  );
}
