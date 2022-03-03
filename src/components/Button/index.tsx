import React, { ButtonHTMLAttributes, FC } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck } from 'react-icons/ai';
import { IoRefreshSharp } from 'react-icons/io5';
import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary';
  icon?: 'arrow-right' | 'check' | 'refresh';
}

const icons = {
  'arrow-right': AiOutlineArrowRight,
  check: AiOutlineCheck,
  refresh: IoRefreshSharp,
};

const Button: FC<ButtonProps> = ({ children, icon, ...attributes }) => {
  const Icon = icons[icon as 'arrow-right' | 'check' | 'refresh'];
  return (
    <Container {...attributes} icon={!!icon}>
      {children}
      {icon && <Icon data-testid="icon" />}
    </Container>
  );
};

export default Button;
