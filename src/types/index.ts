
// TaskList
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

// Available task priorities
export type TaskPriority = 'low' | 'medium' | 'high';

// Available sorting options
export type SortOption = 'dueDate' | 'priority' | 'title';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  // priority: 'low' | 'medium' | 'high';
  priority: TaskPriority;
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  // Total number of tasks before filtering, used to display the correct empty-state message.
  totalTasks: number;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

// TaskItem
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string) => void;
}

// TaskFilter
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    // priority?: 'low' | 'medium' | 'high';
    priority?: TaskPriority;
  }) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  // Sorting properties
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
//   sortBy: "dueDate" | "priority" | "title";
//   onSortChange: (value: "dueDate" | "priority" | "title") => void;
 }


//TaskForm

// Task id will be generated whena task is added 
//status will automatically start as "pending"

export interface TaskFormData {
  title: string;
  description: string,
  // priority: "low" | "medium" | "high";
  priority: TaskPriority;
  dueDate: string;
}

export interface TaskFormProps {
  onAddTask: (taskData: TaskFormData) => void;
  onUpdateTask: (taskId: string, taskData: TaskFormData) => void;
  taskToEdit?: Task;
}

// DashboardStats
export interface DashboardStatsProps {
    totalTasks: number;
    pendingTasks: number;
    inProgressTasks: number;
    completedTasks: number;
}



