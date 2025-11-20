import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  function submit(e) {
    e.preventDefault();
    if (q.trim() === "") return;
    onSearch(q.trim());
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl mx-auto flex gap-2 mt-8">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search GitHub users (e.g. 'oswa', 'john', 'location:pakistan')"
        className="flex-1 p-3 rounded border focus:outline-none"
      />
      <button type="submit" className="px-4 py-2 bg-slate-800 text-white rounded">
        Search
      </button>
    </form>
  );
}
