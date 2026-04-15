import { Link } from 'react-router-dom';

function Header({ showActiveNotes, showArchivedNotes }) {
    return (
        <header>
            <h1><Link to="/">My Catatan</Link></h1>
            <div className="navigation">
                <ul>
                    <li><Link to="/" onClick={showActiveNotes}>Catatan Aktif</Link></li>
                    <li><Link to="/archived" onClick={showArchivedNotes}>Catatan Arsip</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;