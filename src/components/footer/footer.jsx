import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.svg";
import linkdin from "../../assets/images/Frame-143.png";
import facebook from "../../assets/images/Frame-144.png";
import instagram from "../../assets/images/Frame-145.png";

const Footer = ()=> {
  return (
    <footer className="bg-[orange] text-white py-20  footer flex justify-center items-center overflow-hidden custom">
      <div className="sm:container mx-auto lg:pl-6 sm:pl-10 md:pl-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* First Row */}
          <div className="text-center sm:text-left">
            <Link to="/" className="xs:flex xs:justify-center md:block">
              <img className="h-[56px] w-[114.6px]" src={logo} alt="Logo" />
            </Link>
            <span className="xs:hidden sm:block">
              <ul className="flex gap-4 mt-5 mb-20">
                <Link to="/">
                  <img
                    className="h-40px] w-[40px]"
                    src={facebook}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="h-[32px] w-[32px]"
                    src={instagram}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="h-[32px] w-[32px]"
                    src={linkdin}
                    alt="LinkedIn Icon"
                  />
                </Link>
              </ul>
            </span>
            <address className="xs:hidden sm:block">
              Sabaoth OU Ahtri tn 12 10151 <br />
              Tallinn,Harju maakond, Estonia.
            </address>
          </div>

          {/* Second Row */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li>Partnership</li>
              <li>Technology Consulting</li>
              <li>Skill Transfer</li>
              <li>Training</li>
              <li>Product Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Third Row */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li>About Us </li>
            </ul>
          </div>

          {/* Fourth Row */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Popular Articles</h3>
            <ul>
              <li>Design Thinking</li>
              <li>FrontEnd Development</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <span className="sm:hidden xs:block">
            <ul className="flex gap-4 mt-5 justify-center">
              <Link to="/">
                <img
                  className="h-40px] w-[40px]"
                  src={facebook}
                  alt="Facebook Icon"
                />
              </Link>
              <Link to="/">
                <img
                  className="h-[32px] w-[32px]"
                  src={instagram}
                  alt="Instagram Icon"
                />
              </Link>
              <Link to="/">
                <img
                  className="h-[32px] w-[32px]"
                  src={linkdin}
                  alt="LinkedIn Icon"
                />
              </Link>
            </ul>
          </span>

          <address className="sm:hidden xs:block  text-center">
            Sabaoth OU Ahtri tn 12 10151 <br />
            Tallinn,Harju maakond, Estonia.
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
