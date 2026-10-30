Permis Project — Driving Licence Learning Platform
PFE (Final Project) — OFPPT Digital Development
A web platform to help learners prepare for the driving licence.
It covers licence categories, course media, and exam results,
with an admin area to manage users and content.
Features
Home page, navigation and layout for learners
Login and registration
Licence pages: Moto (A) and Voiture (B)
Course media: videos and images, e.g. parking, prohibition signs
  and manoeuvres
Execution / practice cards and results
Admin dashboard: user management, categories and exam scores
Tech Stack
React
JavaScript
CSS
Vite
Project Structure
src/components/Admin/ — Admin dashboard
src/components/Execution/ — Practice cards and results
src/components/Home/, src/components/Layout/,
  src/components/Navbar/, src/components/Footer/ — Pages and layout
src/components/Login/, src/components/Register/ — Authentication pages
src/components/Motopage/, src/components/VoiturePage/ — Licence categories
src/data/ — Demo / mock data
src/App.jsx, src/main.jsx — App entry
Run Locally
npm install
npm run dev
Note: use the scripts defined in package.json if they differ.
Do not commit node_modules — it is installed from package.json.
About
Built as my OFPPT PFE project. Demo data is used for users,
scores and media in the current version.
