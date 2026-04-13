import React from "react";
import { getNote, deleteNote, archiveNote, getActiveNotes } from "../utils/local-data";
import NoteDetail from "./NoteDetail";

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

export default NoteDetailPage;