import { ContainerProps, styled } from '@mui/material';

export const ModalStyle = styled('div')<ContainerProps>(({ theme }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  minHight: '100vh',
  width: '100%',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '20',
}));

export const ModalContent = styled('div')<ContainerProps>(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: '95vh',
  backgroundColor: '#fff',
  borderRadius: '3px',
  boxShadow: '1px 1px 20px black',
  '&.-webkit-scrollbar': {
    width: '12px',
  },
}));
