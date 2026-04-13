import { showFormattedDate } from "../utils/date-formatter";

function NoteDetail({ note, onArchive, onDelete }) {
    return (
        <div className="note-detail">
            <div className="note-detail__content">
                <h2 className="note-detail__title">{note.title}</h2>
                <p className="note-detail__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-detail__body">{note.body}</p>
            </div>
            <div className="note-detail__action">
                <button className="note-detail__archive" onClick={() => onArchive(note.id)}>
                    {note.archived ? 'Pindahkan' : 'Arsipkan'}
                </button>
                <button className="note-detail__delete" onClick={() => onDelete(note.id)}>
                    Hapus
                </button>
            </div>
        </div>
    );
}

export default NoteDetail;