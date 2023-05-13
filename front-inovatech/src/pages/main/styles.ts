import { ContainerProps, styled } from '@mui/material';

/*body {
   background-size: 60%;
  background-size: cover;
}
*/

export const Container = styled('div')<ContainerProps>(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const MainTitle = styled('div')<ContainerProps>(({ theme }) => ({
  padding: '5px 0px',
  boxShadow: '0 1px 20px green',
  borderBottom: '1px solid red',
  position: 'sticky',
  top: '0',
  background: 'transparent',
  color: 'red',
  display: 'inline-block',
  fontSize: '15px',
  marginLeft: '15px',
  lineHeight: '36px',
  marginRight: '8px',
}));

export const BoardsContainer = styled('div')<ContainerProps>(({ theme }) => ({
  flex: '1',
  width: '100%',
  overflowX: 'auto',
  overflowY: 'auto',
  height: '100%',
  paddingTop: '20px',
}));

export const Boards = styled('div')<ContainerProps>(({ theme }) => ({
  width: 'fit-content',
  padding: '0px 30px',
  display: 'inline-flex',
  gap: '30px',
  height: '100%',
}));

export const BoardsLast = styled('div')<ContainerProps>(({ theme }) => ({
  flexBasis: '290px',
  minWidth: '290px',
}));
