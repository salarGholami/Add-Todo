function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const uncompletedNotes = allNotes - completedNotes;

  if (!allNotes) return <h2 className="text-center md:text-lg lg:text-2xl">No Notes has already been added !</h2>;

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
