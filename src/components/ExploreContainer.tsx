import "./ExploreContainer.css";
import styled from "styled-components";
import { Button } from "./Button";
interface ContainerProps {}

const ButtonWrapper = styled.div`
  padding: 0 3rem 0 3rem;
`;
const ExploreContainer: React.FC<ContainerProps> = () => {
  const handleClick = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <ButtonWrapper>
        <Button onClick={handleClick} color="primary" expand="full">
          LOL
        </Button>
      </ButtonWrapper>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
