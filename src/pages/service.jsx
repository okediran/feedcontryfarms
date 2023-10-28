import React from "react";
import useDocumentTitle from "../utilities/useDocumentTitle";
import {Products} from "../components/cardComponent/card";

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
      <div className="h-full bg-[white] p-8 rounded-lg overflow-hidden shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-3">
            <img
              src={icon}
              alt="Service Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {

  return (
    <div className="service" id="Service">
      <div className="servicefooter">
        <h1 className="text-[42px] xs:text-[27px]">WE HAVE THE BEST PRODUCTS</h1>
      </div>
      <div style={{ background: "rgba(255, 165, 0, .1)" }}>
        <div className="mx-auto p-8">
          <h1 className="text-3xl font-bold text-center mb-5">
            The Feed Country Farm Products
          </h1>
          <h4 className="text-2xl text-center mb-5">Explore a wide range of agricultural commodities that we offer:</h4>
          <div className="flex flex-wrap mx-4 text-center">
            {Products.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
