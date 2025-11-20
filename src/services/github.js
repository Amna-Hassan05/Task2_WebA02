// simple wrapper to fetch GitHub search users
export async function searchGithubUsers(query, token = null) {
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=30`;
    const headers = {
      Accept: "application/vnd.github+json"
    };
    // If you have a personal access token (optional), pass it here (do NOT commit)
    if (token) headers.Authorization = `token ${token}`;
  
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const body = await res.json().catch(()=>({message:res.statusText}));
      throw new Error(body.message || `HTTP ${res.status}`);
    }
    const data = await res.json();
    // data.items is array of users
    return data;
  }
  