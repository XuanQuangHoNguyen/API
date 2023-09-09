import { styled } from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LayoutContainer = styled("div")``;
const Layout = (props) => {
  return (
    <div style={{}}>
      <Navbar isAuth={props.isAuth} />

      <LayoutContainer>{props.children}</LayoutContainer>
      <Footer />
    </div>
  );
};

export default Layout;
