import { React } from "react";

import {TypeAnimation} from "react-type-animation";
const Home = () => {
  return (
    <>
     

      <section className="flex justify-between items-center  my-8 home px-12 ">
        <div className="flex flex-col items-start justify-center w-1/2 gap-4">
          <h1 className="text-5xl">My Name is <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Djebril Zidour",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "",
          1000,
          "Djebril Zidour",
          1000
         
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1em", display: "inline-block" ,color: "#FC4100",}}
        repeat={Infinity}
      /></h1>
          <p className="text-3xl">
            an Algerian student living in algeirs , I'm 16 years old i have about 4 years in the field of web development 
            actually  I have some hobbies that i enjoy doing it 
            like photography <span className="text-red-600 cursor-pointer">check my pictures</span> and biking well you can see my skills on development by scrolling on this portfolio 
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="border px-4 py-2 hover:bg-red-500 hover:text-white rounded-xl text-2xl capitalize uppercase">
              click me{" "}
            </button>
            <button className="border px-4 py-2 hover:bg-red-500 hover:text-white rounded-xl text-2xl capitalize uppercase">
              {" "}
              learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
