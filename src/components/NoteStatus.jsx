import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const uncompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <div className="flex justify-center items-center gap-2">
          <span>ℹ️</span>
          <p>No Notes has already been added !</p>
        </div>
      </Message>
    );

  return (
    <ul className="flex justify-between items-center p-3">
      <li className="flex justify-center items-center ">
        All
        <span className="w-5 h-5 flex justify-center items-center ml-1 text-sm bg-neutral-500 rounded-full">
          {allNotes}
        </span>
      </li>
      <li className="flex justify-center items-center">
        completed
        <span className="w-5 h-5 flex justify-center items-center  ml-1 text-sm bg-neutral-500 rounded-full">
          {completedNotes}
        </span>
      </li>
      <li className="flex justify-center items-center">
        open
        <span className="w-5 h-5 flex justify-center items-center ml-1 text-sm bg-neutral-500 rounded-full">
          {uncompletedNotes}
        </span>
      </li>
    </ul>
  );
}

export default NoteStatus;
