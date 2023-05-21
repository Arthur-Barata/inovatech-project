import React from 'react';
import { TaskAssignmentFieldProps } from '../../../Interfaces/Kanban';

export const TaskAssignmentField: React.FC<TaskAssignmentFieldProps> = ({
  taskId,
  users,
  onAssign,
}) => {
  const handleAssign = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserEmail = event.target.value;
    onAssign(taskId, selectedUserEmail);
  };

  return (
    <select onChange={handleAssign}>
      <option value="">Selecione um usuário</option>
      {users.map(user => (
        <option key={user.email} value={user.email}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default TaskAssignmentField;
