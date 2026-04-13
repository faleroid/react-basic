import { useParams } from "react-router-dom";
import NoteDetailPage from "./NoteDetailPage";
import { useNavigate } from "react-router-dom";

function NoteDetailWrapper({ onDelete, onArchive }) {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <NoteDetailPage id={id} navigate={navigate} onDelete={onDelete} onArchive={onArchive} />
    );
}

export default NoteDetailWrapper;