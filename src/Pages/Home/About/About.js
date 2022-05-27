import React from "react";
import about from "../../../assets/about/about.webp";

const About = () => {
  return (
    <div>
      <div class="hero py-40 bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="w-6/12 px-5">
            <img src={about} class=" rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="w-6/12 px-5">
            <h1 class="text-5xl text-primary text-center font-bold">About Us</h1>
            <p class="py-6">
              With more than 18 years in the tools business, Agile Magnetics, a Standex tools
              company, has set the standard for manufacturing custom-designed tools at the highest
              levels of quality and value. Our highly experienced team has led the industry in
              manufacturing quality high frequency power assemblies, markings when required. Our
              highly qualified staff of engineers work together in our state-of-the-art 40,000
              square foot ITAR manufacturing center in Concord, NH to ensure that every custom
              design project is manufactured to our customers’ exact specifications and meet
              virtually any specification. To ensure we deliver only the highest quality products to
              our customers, every product is computer tested prior to delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
