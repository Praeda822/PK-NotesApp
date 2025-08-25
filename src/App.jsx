import { useState, useEffect } from "react";
import NoteForm from "./assets/components/NoteForm";
import NoteList from "./assets/components/NoteList";

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Stores notes in local storage so they persist on refresh
    // JSON.parse converts the string back into an array
    const notes = JSON.parse(localStorage.getItem("notes"));
    // If there are no notes, it returns an empty (default) array
    return notes || [];
  });

  // Will run when anything in the depenency array changes
  // Since notes is in the dependency array, this will run whenever a note changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 PKs Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
