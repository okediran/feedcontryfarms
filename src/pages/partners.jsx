import React from "react";
import image3 from "../assets/images/image 3.png";
import image7 from "../assets/images/image 7.png";
import image5 from "../assets/images/image 5.png";
import useDocumentTitle from "../utilities/useDocumentTitle";

function Contact(){

  function Page(props) {
    const titlePrefix = `/ Partners`;
    useDocumentTitle(`${props.title}${titlePrefix}`);
    return <h2>{props.content}</h2>;
  }

  return (
    <div className="my-10 mt-6 xs:mt-20 service about" id="Partners" >
      <Page title="Feed Country Farm  " />
      <div className="pb-12 service">
        <h1 className="text-center mb-8 text-[2rem] xs:text-[1.5rem] font-[700] relative">
          Our Partners
        </h1>
        <div className="grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xl:gap-16 md:gap-8 leading-10 md:pl-[30px] xs:pl-[150px]">
          {/* Cards */}
          <img
            data-aos="fade-up"
            data-aos-delay="0"
            className="lg:w-[302.16px] lg:h-[140px] sm:w-[200.82px] sm:h-[70px] xs:w-[130px] xs:h-[54px]"
            src={image3}
            alt="icon"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:w-[342.67px] lg:h-[100px] sm:w-[200.82px] sm:h-[70px] xs:w-[130px] md:my-0 xs:h-[54px] xs:my-10"
            src={image7}
            alt="icon"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="400"
            className="lg:w-[270.82px] lg:h-[80px] sm:w-[200.82px] sm:h-[70px] xs:w-[130px] xs:h-[54px]"
            src={image5}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
