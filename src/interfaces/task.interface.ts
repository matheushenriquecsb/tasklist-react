export interface TaskInterfaceProps {
  id: string;
  name: string;
  status: boolean;
}

export interface TaskProps {
  tasks: TaskInterfaceProps[];
  modifyStatusTask: (task: TaskInterfaceProps) => void;
  handleWithEditButtonClick: (task: TaskInterfaceProps) => void;
  deleteTask: (task: TaskInterfaceProps) => void;
}
