# CookDB - Web-Base Recipe Management System
⭐ Version: v1.0.0

## Table of Contents
<!--TOC depthFrom:2 depthTo:2-->
- [CookDB - Web-Base Recipe Management System](#cookdb---web-base-recipe-management-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [Core Features](#core-features)
  - [Out of Scope](#out-of-scope)
  - [Technology Stack](#technology-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
  - [Installation Guide](#installation-guide)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Navigate into Project](#2-navigate-into-project)
    - [3. Install Dependencies](#3-install-dependencies)
    - [Root](#root)
    - [Backend](#backend-1)
    - [Frontend](#frontend-1)
  - [Running the Project](#running-the-project)
  - [Project Structure](#project-structure)
  - [System Flow](#system-flow)
  - [Architecture Overview](#architecture-overview)
  - [UI Pages](#ui-pages)
    - [Home Page](#home-page)
    - [Recipe List Page](#recipe-list-page)
    - [Create New Recipe Page](#create-new-recipe-page)
    - [Edit Recipe Page](#edit-recipe-page)
  - [API Specification](#api-specification)
    - [Recipes API](#recipes-api)
    - [Categories API](#categories-api)
    - [Example API Response](#example-api-response)
    - [GET /recipes](#get-recipes)
  - [Database Design](#database-design)
    - [Recipes Table](#recipes-table)
  - [Challenges During Development](#challenges-during-development)
  - [Future Improvements](#future-improvements)
  - [Screenshots](#screenshots)
    - [Home Page](#home-page-1)
    - [Recipes List](#recipes-list)
    - [Create new Recipes](#create-new-recipes)
    - [Recipes Info](#recipes-info)
    - [Edit Recipes Info](#edit-recipes-info)
  - [Requirements](#requirements)
  - [Tested Environment](#tested-environment)
  - [Changelog](#changelog)
    - [v.1.0.0](#v100)
    - [✨ Added](#-added)
  - [Author](#author)
  - [License](#license)

<!--/TOC-->
## Introduction
CookDB is a web-based recipe management application developed to help users organize and manage cooking recipes efficiently.

The idea for the CookDB application came from my personal passion for cooking and spending time in the kitchen. One of my habits is constantly taking notes of recipes so that the dishes I cook can maintain the same taste and quality every time.

Previously, I had a notebook called “Dorm Kid’s Secret Recipes”, which I used specifically for writing down various cooking recipes. However, I often felt that writing everything by hand was inconvenient and time-consuming. This led me to the idea that it would be great to have a web application that could solve this problem for me.

As a result, the CookDB Web App was created to provide a solution for people who face similar problems. The application is designed with simplicity, accessibility, aesthetics, and usability in mind.

## Features
### Core Features
- Create new recipes
- Edit and delete recipes
- Upload recipe images
- Edit and delete ingredients
- Upload ingredient images or icons
- Add new ingredients
- Search recipes or ingredients by title
- Organize recipes or ingredients by categories
- Responsive user interface
  
## Out of Scope
- AI-generated recipe recommendations
- Multi-user collaboration
  
## Technology Stack
### Frontend
- HTML
- CSS
- JavaScript
- React
- Vite

### Backend
- Node.js
- Express.js

### Database
- SQLite

## Installation Guide
### 1. Clone the Repository
```bash
git clone https://github.com/FRAmyZ010/CookDB.git
```
---
### 2. Navigate into Project
```bash
cd cookdb
```
---
### 3. Install Dependencies
### Root
```bash
npm install
```
### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

---

## Running the Project
Return to the root directory and run:
```bash
npm run dev
```
This command will automatically start both:
- Backend server
- Frontend development server

using concurrently.

## Project Structure
```txt
CookDB/ 
├── backend/ 
│   └──src/
│       ├── middleware/
│       │   └── upload.js
│       ├── routes/
│       │   ├── category.js
│       │   └── recipe.js
│       ├── app.js
│       ├── database.js
│       ├── server.js
│       └── database.db
├── frontend/ 
│   ├── public/ 
│   │   └── img/ 
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx 
├── package.json 
└── README.md
```

## System Flow

```txt
Homepage 
    ↓ 
View Recipe 
    ↓ 
Create new Recipe 
    ↓ 
Edit/Delete Recipe
```

## Architecture Overview
```txt
React Frontend 
    ↓ 
Express.js API 
    ↓ 
SQLite Database
```

## UI Pages
### Home Page
The Home page serves as the main landing page of the application. It displays the most recently added recipe and provides navigation buttons for accessing the recipe list.

### Recipe List Page
The Recipe List page displays all recipes stored in the system. Users can filter recipes by:

- Newest created
- Oldest created
- Categories

### Create New Recipe Page
The Create New Recipe page allows users to:
- Add recipes
- Upload recipe images
- Add ingredients
- Add recipe's instruction

### Edit Recipe Page
The Edit Recipe page allows users to:

- Modify recipe information
- Update ingredient quantities
- Edit instructions
- Change categories
- Delete recipes

## API Specification
### Recipes API
| Method | Endpoint | Descriptions |
| :----: |:-------- | :----------- |
| GET | /recipes | Get all recipes|
| GET | /recipes/:id | Get recipes by ID |
| GET | /recipes/latest/show | Get 3 latest recipes order by ID |
| GET | /recipes/category/:id | Get recipes by category |
| GET | /recipes?search=value | Search recipes by name |
| POST | /recipes | Create new recipes |
| PUT | /recipes/:id | Updated recipe's information |
| DELETE | /recipes/:id | Delete recipes bt ID |

### Categories API
| Method | Endpoint | Descriptions |
| :----: |:-------- | :----------- |
| GET | /category | Get all categories |
| POST | /category | Create new category |
| PUT | /category/:id | Update category information |
| DELETE | /category/:id | Delete category by ID |

### Example API Response
### GET /recipes
```json
[
    {
        "id":1,
        "name":"Carbonara",
        "cook_time":"1 Hr",
        "servings":2,
        "ingredients":"Pasta\nParmesan Chesse\nBacon\nEgg yolk",
        "instruction":"Step1,Step2,Step3",
        "image_url":"carbonara.png",
        "created_at":dateTime

    }
]
```

## Database Design
### Recipes Table
| Column | Type |
| :----- | :--: |
| id | INTEGER |
|name | TEXT |
| cook_time | TEXT |
| servings | INTEGER |
| ingredients | TEXT |
| instructions | TEXT |
| image_url | TEXT |
| created_at | TIMESTAMP |

## Challenges During Development
Some challenges encountered during development included:

- Managing image uploads and storage
- Synchronizing image deletion between SQLite and local storage
- Designing responsive layouts
- Creating dynamic ingredient forms
- Managing React component state effectively

## Future Improvements
- Dark mode
- Languages selection
- Favorite recipes feature
- Cloud database integration
- Category system

## Screenshots
### Home Page
![Home](./screenshots/homepage.png)

### Recipes List
![Recipes-List](./screenshots/recipes-list.png)

### Create new Recipes
![CreateRecipes](./screenshots/add-recipes.png)

### Recipes Info
![RecipesInfo1](./screenshots/recipes-info-1.png)
![RecipesInfo2](./screenshots/recipes-info-2.png)

### Edit Recipes Info
![EditRecipes](./screenshots/edit-recipes.png)

## Requirements
- Node.js v20+
- npm v10+
- Modern web browser
  - Google Chrome
  - Microsoft Edge

## Tested Environment
- Windows 11
- Ubuntu WSL
- Nodejs v22.14.0
- npm v10.9.2

## Changelog
### v.1.0.0
### ✨ Added
- Initial release
- Recipes CRUD system
- Image upload support
- Responsive user interface

## Author
Developed by Pongsapat Pinijngam

🎓 Computer Engineering  
💻 Interested in Full-Stack Development  

🌐 GitHub : [FRAmyZ010](https://github.com/FRAmyZ010)  
📧 E-mail :  [pongsapat.pp2004@gmail.com](mailto:pongsapat.pp2004@gmail.com)

## License
This project is created for educational and portfolio purpose
