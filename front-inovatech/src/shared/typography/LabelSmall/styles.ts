import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLabelSmallTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    opacity: 1,
    letterSpacing: '0.049rem',
    color: theme.palette.common.white,
    font: '400 0.688rem/1.25rem',
    display: 'flex',
    textAlign: 'left',
  })
);
