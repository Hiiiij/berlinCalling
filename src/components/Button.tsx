import React from "react";
import { IonButton, IonIcon, IonContent } from "@ionic/react";

export interface ButtonProps {}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = () => {
  return (
    <IonButton color="primary" expand="block">
      Block Button
    </IonButton>
  );
};
