import "./ExploreContainer.css";
import { Button } from "./Button";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
          <Button>LOL</Button>
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
