import FooterComponent from "../layout/FooterComponent";
import Nav from "../layout/NavBar";
import HomeInfo from "./HomeInfo";

function Home() {
  return (
    <div>
      <Nav></Nav>
      <HomeInfo></HomeInfo>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default Home;
