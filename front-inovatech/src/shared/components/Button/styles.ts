import { Button, styled } from '@mui/material';

export const ButtonStyles = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: '2rem',
  fontSize: '16px',
  width: '10rem',
  height: '2rem',
  textTransform: 'unset',
  color: theme.palette.common.black,
  display: 'flex',
  margin: 'auto',

  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));
