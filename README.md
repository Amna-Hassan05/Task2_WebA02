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
![WhatsApp Image 2025-11-20 at 09 53 42 (1)](https://github.com/user-attachments/assets/fc4ffc4b-5061-454e-adaa-1aeebcabe21e)
![WhatsApp Image 2025-11-20 at 09 53 42 (2)](https://github.com/user-attachments/assets/7ee8ef81-e282-4728-8a00-45feda271d9b)
![WhatsApp Image 2025-11-20 at 09 53 43](https://github.com/user-attachments/assets/8de9a257-4164-43f8-a03c-587548cd12c7)
![WhatsApp Image 2025-11-20 at 09 53 43 (1)](https://github.com/user-attachments/assets/2dd11b94-3ef6-44bd-8620-47bb260749c5)



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


