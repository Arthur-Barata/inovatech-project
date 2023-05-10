import { ContainerProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled('div')<ContainerProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.primary.contrastText,
  height: '7.75rem',
  width: '100%',
}));

export const StyledImg = styled('img')<ContainerProps>(() => ({
  width: '10rem',
  height: '7.5rem',
  paddingLeft: '8%',
}));
