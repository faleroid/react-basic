import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";

function NoteList({ notes, isArchived }) {

    const title = isArchived ? 'Catatan Arsip' : 'Catatan Aktif';

    if (notes.length === 0) {
        return (
            <>
                <h2>{title}</h2>
                <div className="notes-list-empty">
                    <p>Tidak ada catatan</p>
                </div>
            </>
        );
    }

    return (
        <>
            <h2>{title}</h2>
            <div className="notes-list">
                {notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} />
                ))}
            </div>
            <Link to="/notes/new">
                <button className="add-new-page__action ">
                    <span className="material-symbols-outlined">add</span>
                </button>
            </Link>
        </>
    );
}

export default NoteList;