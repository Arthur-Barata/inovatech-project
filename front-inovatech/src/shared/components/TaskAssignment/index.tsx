import React, { useEffect, useState } from 'react';
import { TaskAssignmentFieldProps } from '../../../Interfaces/Kanban';
import { StyledTaskAssignment } from './styles';
import { MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';


export const TaskAssignmentField: React.FC<TaskAssignmentFieldProps> = ({
  taskId,
  users,
  onAssign,
}) => {
  const [selectedUserEmail, setSelectedUserEmail] = useState('');

  const handleAssign = (event: SelectChangeEvent<unknown>) => {
    const email = event.target.value as string;
    setSelectedUserEmail(email);
    onAssign(taskId, email);
  };

  useEffect(() => {
    const savedUserEmail = localStorage.getItem(taskId);
    if (savedUserEmail) {
      setSelectedUserEmail(savedUserEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(taskId, selectedUserEmail);
  }, [selectedUserEmail,taskId]);

  return (
    <StyledTaskAssignment
      value={selectedUserEmail}
      onChange={handleAssign}
      displayEmpty
      renderValue={() => {
        const selectedUser = users.find(user => user.email === selectedUserEmail);
        return selectedUser ? selectedUser.name : 'Selecione um usuário';
      }}
    >
      <MenuItem value="" disabled>
        Selecione um usuário
      </MenuItem>
      {users.map(user => (
        <MenuItem key={user.email} value={user.email}>
          {user.name}
        </MenuItem>
      ))}
    </StyledTaskAssignment>
  );
};
export default TaskAssignmentField;
