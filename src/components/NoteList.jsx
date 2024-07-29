import NoteStatus from "./NoteStatus";

function NoteList({ notes, onDelete, onComplete }) {
 
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-6 md:mt-0 ">
      <NoteStatus notes={notes} />
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onComplete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col p-3">
      <div
        className={`bg-neutral-500 rounded-lg ${
          note.completed ? "bg-neutral-600" : ""
        }`}
      >
        <div className="flex justify-between items-center p-3">
          <div
            className={`flex flex-col ${note.completed ? "opacity-50" : ""}`}
          >
            <p className="font-bold text-lg">{note.title}</p>
            <p className="text-sm text-neutral-300">{note.description}</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button onClick={() => onDelete(note.id)}>❌</button>
            <input
              className="w-4 h-4"
              type="checkbox"
              name={note.id}
              id={note.id}
              value={note.id}
              checked={note.completed}
              onChange={onComplete}
            />
          </div>
        </div>
        <div className="flex justify-center items-center border-t-2 p-2">
          <p className="text-sm  text-neutral-300">
            {new Date().toLocaleDateString("en-US", options)}
          </p>
        </div>
      </div>
    </div>
  );
}
