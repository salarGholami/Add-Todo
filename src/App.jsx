import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

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
            <header className="border-b-2 mb-7 py-5">
              <h1 className="text-center">note Header</h1>
            </header>
            <main className="grid grid-cols-12 md:gap-6">
              <AddNewNote onAddNote={handleAddNotes} />
              <NoteList
                notes={notes}
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
