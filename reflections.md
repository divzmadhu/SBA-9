# WorkTrack – Task Management Dashboard

## Project Overview

WorkTrack is a task management dashboard built using React, TypeScript, and CSS. It allows users to view, manage, filter, and add tasks through a simple interface.

### Reflection Questions

### 1. How I Implemented React and TypeScript Features

I used React to build WorkTrack by breaking the application into smaller components such as TaskForm, TaskList, TaskItem, TaskFilter, and DashboardStats. I used props to pass data and functions between components.

I used React's `useState` to manage tasks, filters, search, and editing. I also used `useEffect` to save tasks in localStorage so that the data remains available when I refresh the page.

I used TypeScript interfaces and types to define the structure of tasks and component props. This helped me keep the data consistent and catch errors while developing.

### 2. Challenges I Encountered and How I Overcame Them

One challenge was managing task updates, especially when adding, editing, deleting, and changing the status of tasks. I worked through these one at a time and tested each feature before moving on.

I also had some difficulties with TypeScript types and passing props between components. I referred to the error messages, checked the types, and made changes until the issues were resolved.

Another challenge was implementing filtering and sorting. I moved this logic into separate utility functions to make it easier to manage and reuse.

I also had to handle form validation and importing JSON files. I tested different situations, including empty form fields and invalid JSON files, to make sure the application handled them properly.

I also had to refer to the React and TypeScript documentation when I was unsure about the syntax or how to use certain features. Sometimes I understood the concept but needed to check the correct syntax or usage.

### 3. My Approach to Component Composition and State Management

I divided the application into smaller components, with each component handling a specific responsibility. For example, TaskForm handles adding and editing tasks, TaskItem displays an individual task, and TaskFilter handles searching, filtering, and sorting.

I kept the main task data in App.tsx because multiple components need access to it. I passed the required data and functions to child components through props. This helped me keep the data flow organized.

I also separated reusable logic, such as filtering, sorting, validation, date formatting, and importing/exporting tasks, into utility files instead of keeping everything in one component.

### Features Implemented
1. Task List: Displays tasks with their title, description, priority, due date, and status.
2. Add and Edit Tasks: Allows users to add new tasks and edit existing ones.
3. Delete Tasks: Allows users to remove tasks from the list.
4. Task Status Update: Allows users to change the status of a task.
5. Filter and Search: Filters tasks by status and priority and searches by title or description.
6. Sorting: Sorts tasks by due date, priority, or title.
7. Dashboard Statistics: Displays the total number of tasks and counts of pending, in-progress, and completed tasks.
8. Form Validation: Checks that the task title and due date are entered before submission and displays error messages.
9. Local Storage: Saves tasks in the browser so they are available even after refreshing the page.
10. Import and Export: Allows users to export tasks as a JSON file and import tasks from a valid JSON file.
11. Date Formatting: Displays due dates in a readable format.

### What I Learned
- Creating and organizing React components.
- Passing data and functions between components using props.
- Managing state using useState and useEffect.
- Handling form inputs, submissions, and validation.
- Adding, editing, deleting, and updating items in an array.
- Implementing search, filtering, and sorting.
- Using TypeScript interfaces and types.
- Saving and retrieving data using Local Storage.
- Importing and exporting JSON data.
- Organizing reusable functions into separate utility files.

### Current Progress

The main task management features have been implemented, including task creation, editing, deletion, status updates, search, filtering, sorting, dashboard statistics, and data import/export.

## Sample Data and Local Storage

Added 9 sample tasks in App.tsx to demonstrate a project planning workflow.
Sample tasks are loaded when the application is opened for the first time.
Tasks are saved in the browser's Local Storage whenever they are added, edited, or deleted.
On subsequent visits, the application loads the saved tasks instead of the initial sample data.
The task assignee is currently included in the description rather than maintained as a separate field.