import { TypographyProps } from '@mui/material';
import React from 'react';
import { StyledLabelSmallTypography } from './styles';

export const LabelSmall: React.FC<TypographyProps> = (props) => {
  return (
    <StyledLabelSmallTypography variant='caption' {...props}>
      {props.children}
    </StyledLabelSmallTypography>
  );
};
