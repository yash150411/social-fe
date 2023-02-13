import { FC } from 'react';
import { PrimaryBtn, SecondaryBtn, GhostBtn } from './style';

export interface ButtonProps {
  text?: string | React.ReactNode;
  onClick?: any;
  className?: any;
  icon?: React.ReactNode;
  testId?: string;
  style?: any;
  type?: string;
  isLoading?: boolean;
  isDisable?: boolean;
  size?: 'middle' | 'small' | 'large' | 'default' | any | string;
  variant?: string;
  fullWidth?: boolean;
}

const getButtonType = (type: any) => {
  switch (type) {
    case 'primary':
      return PrimaryBtn;
    case 'secondary':
      return SecondaryBtn;
    case 'ghost':
      return GhostBtn;
    default:
      return PrimaryBtn;
  }
};

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  type,
  testId,
  style = {},
  className,
  isLoading,
  isDisable,
  icon,
  size,
  variant,
  fullWidth
}) => {
  const ButtonTag = getButtonType(variant);
  return (
    <ButtonTag
      style={{ ...style, width: fullWidth ? '100%' : 'auto' }}
      //@ts-ignore
      htmlType={type}
      icon={icon}
      onClick={(e) => !isLoading && onClick && onClick(e)}
      data-testid={testId}
      className={className}
      disabled={isDisable || isLoading}
      loading={isLoading}
      size={size || 'default'}
      type={variant === 'secondary' ? 'default' : variant === 'ghost' ? 'ghost' : 'primary'}
    >
      {text}
    </ButtonTag>
  );
};
