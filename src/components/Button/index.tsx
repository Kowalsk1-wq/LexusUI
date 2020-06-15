import React from 'react';

import { Container } from './styles';

export interface Props {
  /**
   * Background Color of The Button
  */
  backgroundColor?: string;

  /**
   * Color of The Button
  */
  color?: string;

  /**
   * Outlined Prop of The Button
  */
  outlined?: boolean;

  /**
   * On Click Method
  */
  onClick?: () => void;

  /**
   * Disabled Prop of The Button
  */
  disabled?: boolean;

  /**
   * Dark Prop of The Button
   */
  dark?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = '#845EC2',
  color = '#fff',
  outlined = false,
  dark = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      dark={dark}
      {...props}
    >
      {children}
    </Container>
  );
};
