import React from "react";
import { Link } from "react-scroll";
import useDocumentTitle from "../utilities/useDocumentTitle";

function About() {
  function Page(props) {
    const titlePrefix = `/ About us`;
    useDocumentTitle(`${props.title}${titlePrefix}`);
    return <h2>{props.content}</h2>;
  }

  return (
    <div className="mt-[30px] about text-center" id="About">
      <Page title="Feed Country Farm" />
      <h1
        className="text-[2rem] xs:text-[1.5rem] font-[700] relative mb-[40px]"
        data-aos="fade-up"
      >
        About The Feed Country Farm
      </h1>
      <p
        className="lg:px-[200px] leading-10 xs:leading-8 text-[18px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        At The Feed Country Farm, we are passionate about agriculture and its
        potential to transform economies and nourish communities. We have deep
        roots in Nigeria's rich agricultural landscape, and our team of experts
        has extensive experience in the industry. Our mission is to bridge the
        gap between Nigerian farmers and international markets, ensuring fair
        trade and
      </p>
      <Link to="">
        <button className="rounded-full bg-[orange] text-[20px] text-[white] px-10 py-3 relative mt-[70px] mb-[-40px]">
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default About;
