export interface Task {
  id: string;
  proyectId: string;

  title: string;
  description: string;

  completed: boolean;
  priority: "HIGH" | "MEDIUM" | "LOW" | undefined;
}
