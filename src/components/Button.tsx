import React from "react";
import { IonButton, IonIcon, IonContent } from "@ionic/react";

export interface ButtonProps {
  fill?: "clear" | "outline" | "solid";
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ fill = "solid" }) => {
  return (
    <IonButton color="primary" fill={fill}>
      Block Button
    </IonButton>
  );
};
