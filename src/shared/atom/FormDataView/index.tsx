import React from 'react';
import styled from 'styled-components';

interface IValueProps {
  textColor?: string;
}

interface ITitleProps {
  titleColor?: string;
}

export const FormFieldWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;
export const Value = styled.span<IValueProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ textColor }) => textColor || '#000000'};
  margin-right: 2px;
  margin-bottom: 10px;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled.span<ITitleProps>`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
  text-transform: uppercase;
  margin-right: 2px;
  word-break: break-word;
  color: ${({ titleColor }) => titleColor || '#000000'};
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const EmptyValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: Lato, sans-serif;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
`;

interface FormDataProps {
  heading: string;
  value?: React.ReactNode;
  textColor?: string;
  titleColor?: string;
}
const FormDataView: React.FC<FormDataProps> = ({
  heading,
  value,
  textColor = '#000000',
  titleColor = '#000000'
}) => {
  return (
    <FormFieldWrapper className="content-div">
      <Title className="content-title" titleColor={titleColor}>
        {heading}
      </Title>
      {value ? (
        <Value className="description-margin" textColor={textColor}>
          {value}
        </Value>
      ) : (
        <EmptyValue style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Not Specified</EmptyValue>
      )}
    </FormFieldWrapper>
  );
};
export default FormDataView;
