import { useNavigate } from "react-router-dom";
import AddNotePage from "../pages/AddNotePage";

function AddNoteWrapper({ onAdd }) {
    const navigate = useNavigate();

    return (
        <AddNotePage onAdd={onAdd} navigate={navigate} />
    );
}

export default AddNoteWrapper;