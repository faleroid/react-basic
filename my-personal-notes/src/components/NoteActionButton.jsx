function NoteActionButton({ variant, onClick, id, label }) {
    return (
        <button
            className={`note-item__${variant}-button`}
            type="button"
            onClick={() => onClick(id)}
            data-testid={`note-item-${variant}-button`}
        >
            {label}
        </button>
    );
}

export default NoteActionButton;