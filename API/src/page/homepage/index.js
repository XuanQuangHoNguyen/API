import { styled } from "styled-components";

const Container = styled("div")`
  img {
    width: 100%;
    height: 100%;
  }

`;

const HomePage = () => {
  return (
    <Container>
      <img src="/assets/img/homepage.png" alt="image" />
    </Container>
  );
};

export default HomePage;
