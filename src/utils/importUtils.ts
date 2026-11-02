import type { Task } from "../types";

export async function importTasks(file: File): Promise<Task[]> {
    const fileContent = await file.text();

    let data: unknown;

    try {
        data = JSON.parse(fileContent) as unknown;
    } catch {
        throw new Error("The selected file is not valid JSON.");
    }

    if (!validateImportedTasks(data)) {
        throw new Error("The selected file does not contain valid WorkTrack tasks.");
    }

    return data;
}

export function validateImportedTasks(data: unknown): data is Task[] {
    if (!Array.isArray(data)) {
        return false;
    }

    return data.every((task) =>
        task &&
        typeof task.id === "string" &&
        typeof task.title === "string" &&
        typeof task.description === "string" &&
        ["pending", "in-progress", "completed"].includes(task.status) &&
        ["low", "medium", "high"].includes(task.priority) &&
        typeof task.dueDate === "string"
    );
}