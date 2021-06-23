import React from "react";
import styled from "styled-components";
import { IonButton, IonIcon, IonContent } from "@ionic/react";
import "./button.css";

export interface ButtonProps {
  fill?: "clear" | "outline" | "solid";
  expand?: "block" | "full";
  color?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

const StyledButton = styled(IonButton)`
  --background-hover: pink;
`;
export const Button: React.FC<ButtonProps> = ({
  children,
  expand,
  color,
  onClick,
}) => {
  // return <IonButton className="btn">{children}</IonButton>;
  return (
    <StyledButton
      size="default"
      color={color}
      onClick={onClick}
      expand={expand}
    >
      {children}
    </StyledButton>
  );
};
