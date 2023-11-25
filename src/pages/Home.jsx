import React from "react";
import Hero from "../components/Hero";
import FeatureOne from "../components/FeatureOne";
const Home = () => {
  return (
    <div  className="container mx-auto bg-white h-[100vh] min-w-full flex flex-col justify-start gap-10 items-center">
     <Hero/>
     <FeatureOne/>
    </div>
  );
};

export default Home;
