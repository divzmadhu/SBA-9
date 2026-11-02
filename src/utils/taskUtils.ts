import type { Task, TaskStatus, TaskPriority, SortOption } from "../types";

export function filterTasks(
    tasks: Task[],
    filters: {
        status?: TaskStatus;
        priority?: TaskPriority;
    },
    searchTerm: string
): Task[] {
    return tasks.filter((task) => {
        return (
            (!filters.status || task.status === filters.status) &&
            (!filters.priority || task.priority === filters.priority) &&
            (
                !searchTerm ||
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    });
}

export function sortTasks(tasks: Task[], sortBy: SortOption): Task[] {
    return [...tasks].sort((a, b) => {
        if (sortBy === "dueDate") {
            return a.dueDate.localeCompare(b.dueDate);
        }

        if (sortBy === "priority") {
            const priorityOrder = {
                high: 1,
                medium: 2,
                low: 3
            };

            return priorityOrder[a.priority] - priorityOrder[b.priority];
        }

        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }

        return 0;
    });
}