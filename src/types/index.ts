
// TaskList
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
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
    priority?: 'low' | 'medium' | 'high';
  }) => void;
}


//TaskForm

// Task id will be generated whena task is added 
//status will automatically start as "pending"

export interface TaskFormData{
  title :string;
  description:string,
  priority:"low" | "medium" |"high";
  dueDate : string;
}

export interface TaskFormProps{
  onAddTask:(taskData:TaskFormData)=>void;
}

