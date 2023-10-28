import React from "react";
import useDocumentTitle from "../utilities/useDocumentTitle";

function Process() {
  function Page(props) {
    const titlePrefix = `/Process`;
    useDocumentTitle(`${props.title}${titlePrefix}`);
    return <h2>{props.content}</h2>;
  }

  return (
    <div className="servicefooter text-center" id="Process">
      <div>
        <Page title="Feed Country Farm  " />
        <h1
          className="text-[3rem] xs:text-[1.5rem] font-[700] relative mb-[20px]"
          data-aos="fade-up"
        >
          Export Process
        </h1>
        <p
          className="lg:px-[200px] leading-10 xs:leading-8 text-[18px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Learn about our streamlined export process, from sourcing and quality
          control to packaging and logistics. We make it easy for you to access
          the finest agricultural products from Nigeria.
        </p>
      </div>
    </div>
  );
}

export default Process;
