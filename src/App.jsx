import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = (newNote) => {
    setNotes((preNotes) => [...preNotes, newNote]);
  };

  return (
    <>
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <header className="border-b-2 mb-7 py-5">
              <h1 className="text-center">note Header</h1>
            </header>
            <main className="grid grid-cols-12 lg:gap-12">
              <AddNewNote onAddNote={handleAddNotes} />
              <NoteList notes={notes}/>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
