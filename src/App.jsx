import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNotes = (newNote) => {
    setNotes((preNotes) => [...preNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filterNotes = notes.filter((note) => note.id !== id);
    // setNotes(filterNotes);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);

    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    setNotes((preNotes) =>
      preNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <>
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <header className="border-b-2 mb-7">
              <NoteHeader
                notes={notes}
                sortBy={sortBy}
                onSortBy={(e) => setSortBy(e.target.value)}
              />
            </header>
            <main className="grid grid-cols-12 md:gap-6">
              <AddNewNote onAddNote={handleAddNotes} />
              <NoteList
                notes={notes}
                sortBy={sortBy}
                onDelete={handleDeleteNote}
                onComplete={handleCompleteNote}
              />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
