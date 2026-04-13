import React from 'react';
import NoteList from './NoteList';
import Header from './Header';
import SearchButton from './SearchButton';
import Footer from './Footer';
import NoteDetailWrapper from './NoteDetailWrapper';
import { Routes, Route } from 'react-router-dom';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
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

  onSearchHandler = (searchKeyword) => {
    this.setState(() => {
      return {
        searchKeyword: searchKeyword,
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
            <Route path="/" element=
              {
                <>
                  <SearchButton searchKeyword={this.state.searchKeyword} onSearchHandler={this.onSearchHandler} />
                  <NoteList notes={filteredNotes} />
                </>
              } />
            <Route path="/notes/:id" element={<NoteDetailWrapper onDelete={this.onDelete} onArchive={this.onArchive} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
