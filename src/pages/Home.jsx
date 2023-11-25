import React from "react";
import Hero from "../components/Hero";
import FeatureOne from "../components/FeatureOne";
import FeatureTwo from "../components/FeatureTwo";
import FeatureThree from "../components/FeatureThree";
import Subscription from "../components/Subscription";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div  className="container mx-auto bg-white h-[100vh] min-w-full flex flex-col justify-start gap-10 items-center">
     <Hero/>
     <FeatureOne/>
     <FeatureTwo/>
     <FeatureThree/>
     <Subscription/>
     <FAQ/>
     <Footer/>
    </div>
  );
};

export default Home;
