import { Link } from 'react-router-dom';

function Header({ showActiveNotes, showArchivedNotes }) {
    return (
        <header>
            <h1>My Catatan</h1>
            <div className="navigation">
                <ul>
                    <Link to="/">
                        <li><a href="#" onClick={showActiveNotes}>Catatan Aktif</a></li>
                    </Link>
                    <Link to="/">
                        <li><a href="#" onClick={showArchivedNotes}>Catatan Arsip</a></li>
                    </Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;