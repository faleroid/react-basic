import { showFormattedDate } from "../utils/date-formatter";

function NoteDetail({ note, onArchive, onDelete }) {
    return (
        <div className="detail-page">
            <div className="detail-page">
                <h2 className="detail-page__title">{note.title}</h2>
                <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
                <p className="detail-page__body">{note.body}</p>
            </div>
            <div className="detail-page__action">
                <button className="action" onClick={() => onArchive(note.id)}>
                    {note.archived ? 'Pindahkan' : 'Arsipkan'}
                </button>
                <button className="action" onClick={() => onDelete(note.id)}>
                    Hapus
                </button>
            </div>
        </div>
    );
}

export default NoteDetail;