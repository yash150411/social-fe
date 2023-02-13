import React, { FC } from 'react';
import styled from 'styled-components';

export const H1Typography = styled.h1`
  font-size: 30px;
  line-height: 38px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  font-stretch: normal;
  font-style: normal;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const H2Typography = styled.h2`
  font-size: 26px;
  line-height: 31px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  font-stretch: normal;
  font-style: normal;
  margin: 0;
  color: #000;
  @media (max-width: 768px) {
    font-size: 20px !important;
    line-height: 20px;
  }
`;

export const H3Typography = styled.h3`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  font-stretch: normal;
  font-style: normal;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
export const H4Typography = styled.h4`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  font-stretch: normal;
  font-style: normal;
`;

export const H5Typography = styled.h5`
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  font-stretch: normal;
  font-style: normal;
  span {
    color: red;
  }
`;

export const H6Typography = styled.h6`
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const TypoBodyBody1 = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
`;

interface TypographyProps {
  text?: string | JSX.Element;
  className?: string;
  dataTestid?: any;
  style?: React.CSSProperties;
  mandatoryIcon?: any;
  onClick?: () => void;
}

export const H1: FC<TypographyProps> = ({ text, style, className }) => {
  return (
    <H1Typography style={style} className={className} data-testid="H1-test">
      {text}
    </H1Typography>
  );
};

export const H2: FC<TypographyProps> = ({ text, className, style }) => {
  return (
    <H2Typography style={style} className={className} data-testid="H2-test">
      {text}
    </H2Typography>
  );
};

export const H3: FC<TypographyProps> = ({ text, className, style, mandatoryIcon }) => {
  return (
    <H3Typography style={style} className={className} data-testid="H3-test">
      {text}{' '}
      <span className="iconmark" style={{ color: 'red' }}>
        {mandatoryIcon}
      </span>
    </H3Typography>
  );
};
export const H4: FC<TypographyProps> = ({ text, onClick, className, style }) => {
  return (
    <H4Typography onClick={onClick} style={style} className={className} data-testid="H4-test">
      {text}
    </H4Typography>
  );
};

export const H5: FC<TypographyProps> = ({ text, className, style }) => {
  return (
    <H5Typography className={className} style={style} data-testid="H5-test">
      {text}
    </H5Typography>
  );
};

export const H6: FC<TypographyProps> = ({ text, className, style }) => {
  return (
    <H6Typography className={className} style={style} data-testid="H5-test">
      {text}
    </H6Typography>
  );
};

export const BodyText1: FC<TypographyProps> = ({ text, className, style }) => {
  return (
    <TypoBodyBody1 className={className} style={style} data-testid="H5-test">
      {text}
    </TypoBodyBody1>
  );
};
