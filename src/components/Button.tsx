import React from "react";
import styled from "styled-components";
import { IonButton, IonIcon, IonContent } from "@ionic/react";
import "./button.css";
export interface ButtonProps {
  fill?: "clear" | "outline" | "solid";
}

/**
 * Primary UI component for user interaction
 */

const StyledButton = styled(IonButton)`
  --background-hover: pink;
`;
export const Button: React.FC<ButtonProps> = ({ children }) => {
  // return <IonButton className="btn">{children}</IonButton>;
  return <StyledButton>{children}</StyledButton>;
};
