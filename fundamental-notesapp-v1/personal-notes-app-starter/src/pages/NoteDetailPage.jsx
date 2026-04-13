import React from "react";
import { getNote, getActiveNotes } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NoteDetailWrapper({ onDelete, onArchive }) {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <NoteDetailPage id={id} navigate={navigate} onDelete={onDelete} onArchive={onArchive} />
    );
}

class NoteDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id),
        };
    }

    onArchive = (id) => {
        this.props.onArchive(id);
        this.props.navigate('/');
        this.setState(() => {
            return {
                notes: getActiveNotes(),
            };
        });
    }

    onDelete = (id) => {
        this.props.onDelete(id);
        this.props.navigate('/');
        this.setState(() => {
            return {
                notes: getActiveNotes(),
            };
        });
    }

    render() {
        if (this.state.note === null) {
            return <p>Catatan tidak ditemukan</p>;
        }

        return (
            <NoteDetail note={this.state.note} onArchive={this.onArchive} onDelete={this.onDelete} />
        );
    }
}

export default NoteDetailWrapper;