import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list', keywords }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan
        </p>
      </div>
    );
  }

  const groupedNotes = notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);
    const monthYear = date.toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    });

    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }

    groups[monthYear].push(note);

    return groups;
  }, {});

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
      {/* TODO [Skilled] ekstrak tombol aksi menjadi komponen reusable agar dipakai NoteItem. */}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
      {Object.entries(groupedNotes).map(([monthYear, monthNotes]) => (
        <section
          key={monthYear}
          className="notes-group"
          data-testid="notes-group"
        >

          <h3 className="notes-group__title">{monthYear}</h3>

          {/* TODO [Basic] gunakan array.map untuk merender NoteItem */}
          {monthNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
              keyword={keywords}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

export default NotesList;
