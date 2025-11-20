import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchGithubUsers } from "./services/github";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  // Optional: put your token here for local testing (NEVER commit)
  const GITHUB_TOKEN = null; // or "ghp_...." but don't push to repo

  async function handleSearch(q) {
    setQuery(q);
    setLoading(true);
    setError("");
    setUsers([]);
    try {
      const data = await searchGithubUsers(q, GITHUB_TOKEN);
      setUsers(data.items || []);
      if ((data.items || []).length === 0) setError("No users found.");
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
      <p className="text-center text-sm text-gray-600 mt-2">Type username or keywords (e.g. "location:pakistan")</p>

      <SearchBar onSearch={handleSearch} />

      <div className="max-w-5xl mx-auto mt-6">
        {loading && <div className="text-center py-8">Loading...</div>}
        {error && !loading && <div className="text-center text-red-600 py-4">{error}</div>}
        {!loading && users.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.map(u => <UserCard key={u.id} user={u} />)}
          </div>
        )}
      </div>
      <footer className="text-center text-xs text-gray-500 mt-8">
        Uses GitHub Search API. Unauthenticated limit is small — consider personal token for more calls.
      </footer>
    </div>
  );
}

export default App;
