import { showFormattedDate } from "../utils/date-formatter.js";
import { Link } from 'react-router-dom';

function NoteItem({ id, title, createdAt, body }) {
    return (
        <div className="note-item">
            <h1 className="note-item__title">
                <Link to={`/notes/${id}`}>
                    {title}
                </Link>
            </h1>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItem;