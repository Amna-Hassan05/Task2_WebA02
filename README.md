Task 2 – GitHub User Search Page

Project Overview

This page allows users to **search GitHub usernames** and displays matching profiles dynamically using the **GitHub REST API.

 Features

* Input field for username search
* Fetches data from GitHub API: `https://api.github.com/search/users?q={query}`
* Displays:

  * Avatar
  * Username
  * Profile link
* Loading & error handling
* Responsive layout using Tailwind CSS


Screenshots
<img width="1470" height="956" alt="Screenshot 2025-11-20 at 10 04 24 PM" src="https://github.com/user-attachments/assets/0a60c873-bf6c-4430-b0b7-43b4b1e02594" />
<img width="1470" height="956" alt="Screenshot 2025-11-20 at 10 04 36 PM" src="https://github.com/user-attachments/assets/5d424c5e-d2f0-4221-b1f6-10925f47a469" />

<img width="1470" height="956" alt="Screenshot 2025-11-20 at 10 04 52 PM" src="https://github.com/user-attachments/assets/d4f995f8-6d8b-44f8-bf77-37bc5de3f2bf" />
<img width="1470" height="956" alt="Screenshot 2025-11-20 at 10 05 04 PM" src="https://github.com/user-attachments/assets/a35c7e5a-9f8c-43d8-bd13-9db5ce6348da" />


GitHub Search Input

![GitHub Search](./screenshots/github-search.png)
Caption: User enters a GitHub username query.

GitHub User Results

![GitHub Users](./screenshots/github-results.png)
Caption: Matching GitHub profiles with avatar, username, and profile link.


Setup Instructions

1. Ensure Task 1 repo is cloned and running.
2. Navigate to `/github-users` route in React app.
3. Enter any GitHub username to see results fetched live.


Team Contributions

| Name          | Contribution                               |
| ------------- | ------------------------------------------ |
| Oswa Saleem   | GitHub API integration, error handling     |
| Amna Hassan   | UI design, responsive layout               |
| Arooba Faisal | Search functionality, loading/error states |


