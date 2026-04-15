import React from 'react';
import NoteList from '../pages/NoteList';
import Header from './Header';
import SearchWrapper from './SearchWrapper';
import SearchBar from './SearchBar';
import Footer from './Footer';
import NoteDetailWrapper from './NoteDetailWrapper';
import AddNoteWrapper from './AddNoteWrapper';
import NotFoundPage from '../pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  archiveNote,
  addNote
} from '../utils/local-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      searchKeyword: '',
    };
  }

  onAdd = (title, body) => {
    addNote({ title, body });
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onShowActiveNotes = () => {
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onShowArchivedNotes = () => {
    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onSearchHandler = (keyword) => {
    this.setState(() => {
      return {
        searchKeyword: keyword,
      };
    });
  }

  onDelete = (id) => {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onArchive = (id) => {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase());
    });

    return (
      <div className="app-container">
        <Header showActiveNotes={this.onShowActiveNotes} showArchivedNotes={this.onShowArchivedNotes} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <h2>Catatan Aktif</h2>
                <SearchWrapper keywordChange={this.onSearchHandler} />
                <NoteList notes={filteredNotes} />
              </>
            } />
            <Route path="/archived" element={
              <>
                <h2>Catatan Arsip</h2>
                <SearchWrapper keywordChange={this.onSearchHandler} />
                <NoteList notes={filteredNotes} />
              </>
            } />
            <Route path="/notes/:id" element={<NoteDetailWrapper onDelete={this.onDelete} onArchive={this.onArchive} />} />
            <Route path="/notes/new" element={<AddNoteWrapper onAdd={this.onAdd} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
