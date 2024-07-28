function NoteList({ notes, onDelete }) {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-6 md:mt-0 ">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col p-3">
      <div className="bg-neutral-500 rounded-lg">
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col">
            <p className="font-bold text-lg">{note.title}</p>
            <p className="text-sm text-neutral-300">{note.description}</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button onClick={() => onDelete(note.id)}>❌</button>
            <input className="w-4 h-4" type="checkbox" name="" id="" />
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
