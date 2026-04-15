import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NoteDetailPage from "../pages/NoteDetailPage";

function NoteDetailWrapper({ onDelete, onArchive }) {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <NoteDetailPage id={id} navigate={navigate} onDelete={onDelete} onArchive={onArchive} />
    );
}

export default NoteDetailWrapper;