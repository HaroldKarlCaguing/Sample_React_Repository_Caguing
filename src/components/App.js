import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
import Banner from "../components/Banner";
import Image1 from "../images/pic1.png";
import Image2 from "../images/pic2.png";
import Image3 from "../images/pic3.png";
import Image4 from "../images/pic4.jpg";
import Image5 from "../images/pic5.jpg";
import GridItems from "./GridItems";
import Footer from "./Footer";



function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <div className="bg-dark p-5">
        <div className="container">
          <h1 className="text-warning">Top 5 images of the week</h1>
          <div className="row g-5 justify-content-center">
              <GridItems name="Cute Girl #1" imageFile={Image1} desc="Lorem Ipsum"></GridItems>
              <GridItems name="Cute Girl #2" imageFile={Image2} desc="Lorem Ipsum"></GridItems>
              <GridItems name="Cute Girl #3" imageFile={Image3} desc="Lorem Ipsum"></GridItems>
              <GridItems name="Talikodgenic Girl" imageFile={Image4} desc="Lorem Ipsum Ismum"></GridItems>
              <GridItems name="Talikodgenic Boy" imageFile={Image5} desc="Lorem Ipsum Ipsun"></GridItems>
          </div>

        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default App;