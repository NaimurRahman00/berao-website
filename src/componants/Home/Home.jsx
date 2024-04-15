import { useEffect } from "react";
import "../../App.css";
import Estate from "./Estate";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { slidersData, cardData } = useLoaderData();

  // Dynamic title
  useEffect(()=> {
    document.title='Berao | Home'
  },[])

  return (
    <>
    <Slider slidersData={slidersData}></Slider>
    <Estate cardData={cardData}></Estate>
    </>
  );
};

export default Home;
