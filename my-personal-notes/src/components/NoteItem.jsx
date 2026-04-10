import { showFormattedDate } from '../utils';
import NoteActionButton from './NoteActionButton';

function NoteItem({ note, onDelete, onArchive, keywords }) {

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="note-item"
      data-testid="note-item"
      data-note-id={note?.id}
    >
      <div className="note-item__content" data-testid="note-item-content">
        {/* TODO [Basic] tampilkan judul catatan menggunakan note.title */}
        {/* TODO [Advanced] sorot kata kunci pencarian dalam judul menggunakan elemen <mark>. */}
        <h3 className="note-item__title" data-testid="note-item-title">
          {highlightText(note.title, keywords)}
        </h3>
        {/* TODO [Basic] gunakan util showFormattedDate untuk menampilkan tanggal dibuat. */}
        <p className="note-item__date" data-testid="note-item-date">
          {showFormattedDate(note.createdAt)}
        </p>
        {/* TODO [Basic] tampilkan isi catatan dari note.body */}
        {/* TODO [Advanced] sorot kata kunci pencarian dalam isi menggunakan elemen <mark>. */}
        <p className="note-item__body" data-testid="note-item-body">
          {highlightText(note.body, keywords)}
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        {/* TODO [Skilled] pecah tombol aksi menjadi komponen terpisah bernama `NoteActionButton` dengan menerima props `variant` dan `onClick` */}
        {/* TODO [Advanced] implementasikan tombol arsip untuk fitur mengarsipkan catatan */}
        <NoteActionButton
          variant="archive"
          onClick={onArchive}
          id={note.id}
          label={note.archived ? 'Pindahkan' : 'Arsipkan'}
        />

        <NoteActionButton
          variant="delete"
          onClick={onDelete}
          id={note.id}
          label="Hapus"
        />
      </div>
    </div>
  );
}

export default NoteItem;
