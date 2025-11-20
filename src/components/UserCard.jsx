import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="border rounded p-4 flex items-center gap-4">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
      <div>
        <a href={user.html_url} target="_blank" rel="noreferrer" className="font-semibold">
          {user.login}
        </a>
        <div className="text-sm text-gray-600">Score: {Math.round(user.score)}</div>
      </div>
    </div>
  );
}

