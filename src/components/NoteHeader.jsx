function NoteHeader({ notes, sortBy, onSortBy }) {
  return (
    <div className="flex justify-around items-center py-5">
      <div className="flex justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          My Notes ({notes.length})
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <select
          className="bg-neutral-500 text-sm py-3 px-2 rounded-xl"
          value={sortBy}
          onChange={onSortBy}
        >
          <option className="py-3 px-2" value="latest">
            sort based on latest notes
          </option>
          <option className="py-3 px-2" value="earliest">
            sort based on earliest notes
          </option>
          <option className="py-3 px-2" value="completed">
            sort based on completed notes
          </option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
