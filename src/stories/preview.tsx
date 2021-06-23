// .storybook/preview.js
import React, { CSSProperties, useState } from "react";
import { addDecorator } from "@storybook/react";
import { IonApp, IonContent, IonPage, IonList, IonButton } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "../theme/variables.css";

const styles: CSSProperties = {
  textAlign: "center",
  position: "absolute",
  left: 0,
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
};

/* tsignore */
const IonWrapper = ({ children }) => {
  return (
    <IonApp>
      <IonPage>
        <IonContent>
          <div style={styles}>{children}</div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

addDecorator((storyFn) => <IonWrapper>{storyFn()}</IonWrapper>);
