import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    if (!title || !description) return null;

    e.preventDefault();

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3">
      <h1 className="text-center text-lg mb-5">Add New Note</h1>
      <form className="flex flex-col gap-y-5 mx-5" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-neutral-600 p-4 rounded-lg text-sm"
          type="text"
          placeholder="Note title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-neutral-600 p-4 rounded-lg text-sm"
          type="text"
          placeholder="Note Description"
        />
        <div className="w-full">
          <button className="bg-blue-800 hover:bg-blue-700 w-full py-3 text-sm">
            Add New Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewNote;
