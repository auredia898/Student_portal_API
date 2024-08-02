# Student Portal Admission

## Description:
This project enables students to view universities and apply for admission to those that interest them. Likewise, individuals with a university can register that university on the platform, manage streams, races and validate student admissions if inspired. 
As a student, you can register to take one or more courses belonging to the university that has accepted your admission. You can also modify your profile.

## Facility:
1-  *Clone the repository:*  ```
                                **git clone https://github.com/auredia898/Student_portal_API.git**
                             ```
2-  *install dependencies:*  **npm install** 
3-  *start the project:*  **npm run dev** 

## Design Decisions:
For code fluidity and easy long-term maintenance, we have used a simple and explicit architecture which uses:

- **SOLID:** Each folder of this application has a specific role and functions are reusable.
- **DRY:** Prohibition of repetition in the code.
- **KISS:** A very simple and easy to use interface for anyone.

## Architecture: 
Our application is divided into too interconnected parts:
- **backend:** It is a **NodeJs** application with a simple architecture providing all the necessary APIs.
- **database:** This is the database used to store data such as statuses, users, etc. Here **Neon** is used.

### The various endpoints can be found in the documentation for postman's **"Student** Portal" collection. 