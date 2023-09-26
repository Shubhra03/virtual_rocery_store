import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Carousel1 from "../features/Carousel";
import Addition from "../features/product/components/Addition";
import "./Home.css";
import { useMediaQuery } from 'react-responsive';

function Home() {
  const images = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1691432049_Oral_Care_Fest_Without_Logo_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1692180619_Delicious_Deals_Savor_the_Savings_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1692265739_Max_Discounts_On_Daily_Essentials_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1690827231_Shop_For_Monthly_Essentials_Desktop.jpg?im=Resize=(1680,320)",
    "https://rukminim2.flixcart.com/fk-p-flap/1100/500/image/830e328c466a6f91.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1100/500/image/f070a6edb2ae145c.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1100/500/image/0793f72ebcd1e8f0.jpeg?q=90"
  ];
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' }); // Adjust the breakpoint as needed
  const imagesToShow = isDesktop ? images.slice(0, 3) : images.slice(4);

  return (
    <div className="whole">
      <NavBar>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    {imagesToShow.map((image, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
        <img src={image} className="d-block w-100 h-45 object-contain object-center" alt="..." />
      </div>
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        <div className="child22 mt-2">
          <img
            src="https://d1n5l80rwxz6pi.cloudfront.net/indian-grocery-items.jpg"
            alt=""
          />
        </div>

        <div className="child22 mt-2">
          <img
            src="https://i.pinimg.com/originals/17/e8/f1/17e8f167cf008662215523f379064c27.png"
            alt=""
          />
        </div>

        <Addition />

        <ProductList></ProductList>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default Home;
