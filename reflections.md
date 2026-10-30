Lab 3
Lists, Keys, and Conditionals

### TaskFlow – Task Management App
## Overview

TaskFlow is a task management application built with React, TypeScript, and CSS. It allows users to view tasks, filter them by status and priority, update task statuses, and delete tasks.

Features
Display Tasks: Displays a list of tasks with their titles, descriptions, priorities, due dates, and statuses.
Filter Tasks: Filter tasks by status, priority, or both at the same time.
Update Task Status: Change a task's status to Pending, In Progress, or Completed.
Delete Tasks: Remove tasks from the list.
Conditional Rendering: Displays appropriate messages when there are no tasks or when no tasks match the selected filters.
Priority Styling: Uses different text colors to distinguish low-, medium-, and high-priority tasks.

### Reflection Questions 

### 1. How did you ensure unique keys for your list items?

I used the `id` of each task as the key when displaying the list of tasks. Since each task has its own unique ID, React can identify each task correctly when the list changes. This also helps React keep track of tasks when I delete a task or change its status.

### 2. What considerations did you make when implementing the filtering functionality?

I implemented two filters: one for task status and another for priority. I wanted users to filter tasks by status, priority, or both together. Initially, changing one filter replaced the other filter. I fixed this by using `useState` to keep track of the selected status and priority separately. I also handled the All Statuses and All Priorities options so users can clear a filter without accidentally clearing the other one.

### 3. How did you handle state updates for task status changes?

I used a function called `handleStatusChange` in `App.tsx` to update a task's status. I used `map()` to go through the tasks and find the task with the matching ID. If the ID matches, I return an updated task with the new status; otherwise, I keep the task unchanged. This updates the task without directly modifying the original array.

### 4. What challenges did you face when implementing conditional rendering?

One challenge was deciding what message to display when no tasks were shown. I needed to distinguish between having no tasks in the list and having tasks that did not match the selected filters. I used the total number of tasks and the filtered task list to handle these situations separately. This helped me display a more meaningful message depending on the situation.


### Future Improvements
Add the ability to create new tasks.
Add the ability to edit task details.
Save tasks so they remain available after refreshing the page.
