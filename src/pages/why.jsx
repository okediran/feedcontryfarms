import React from "react";
import useDocumentTitle from "../utilities/useDocumentTitle";
import {Reasons} from "../components/cardComponent/card";

const ServiceCard = ({ icon, title, description, delay }) => {
  function Page(props) {
    const titlePrefix = `/ Service`;
    useDocumentTitle(`${props.title}${titlePrefix}`);
    return <h2>{props.content}</h2>;
  }

  return (
    <div
      className="p-4 md:w-1/2 lg:w-1/3"
      data-aos="fade-down"
      data-aos-delay={`${delay}`}
    >
      <Page title="Feed Country Farm  " />
      <div className="h-full bg-[#ffa5001a] p-8 rounded-lg overflow-hidden shadow-md">
        <div className="flex items-center justify-center mb-4">
          <div className= "">
            <img
              src={icon}
              alt="Service Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Why = () => {
  return (
    <div className="service" id="Why">
        <div className="mx-auto p-8 about text-center">
          <h1 className="text-[2rem] xs:text-[1.5rem] font-[700] relative mb-[40px]">
            Why Choose Us
          </h1>
          <div className="flex flex-wrap mx-4 text-center">
            {Reasons.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default Why;
