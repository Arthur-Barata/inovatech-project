import { ContainerProps, styled } from '@mui/material';

export const StyledFooter = styled('div')<ContainerProps>(({ theme }) => ({
  bottom: 0,
  width: '100%',
  padding: '1% 6%',
  background: theme.palette.primary.dark,
  position: 'fixed',
  margin: '0',
}));
