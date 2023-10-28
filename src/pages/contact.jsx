import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Image from "../assets/images/pexels-zen-chung-5529941.jpg";
import { Link } from "react-scroll";
import useDocumentTitle from "../utilities/useDocumentTitle";

function Contact() {
  function Page(props) {
    const titlePrefix = `/ Contact us`;
    useDocumentTitle(`${props.title}${titlePrefix}`);
    return <h2>{props.content}</h2>;
  }

  return (
    <div className="my-[50px] px-[40px] contact" id="Contact">
      <Page title="Feed Country Farm  " />
      <h1 className="text-3xl font-bold text-center mb-8 relative">
        Contact Us
      </h1>
      <div className="flex items-center justify-center">
        <div className="pr-7" data-aos="fade-down" >
          <p className="leading-7 text-[18px]">
            <p className="mb-5">
              Have questions or ready to place an order? Contact our friendly team today. We are
              here to assist you with any inquiries, custom orders, or partnership opportunities.
            </p>
            <span>
              Join us in our mission to bring the best of Nigerian agriculture to the world. Together, we can create a sustainable and prosperous future for farmers, businesses, and
              consumers worldwide
            </span>
          </p>
          <ul className="md:text-left xs:text-center">
            <li className="my-7 md:flex xs:block gap-3">
              <h2 className="xs:flex justify-center align-center md:block">
                <FaMapMarkerAlt />
              </h2>
              <p>
                <h2 className="xs:flex justify-center align-center md:block">
                  Address
                </h2>
                Sabaoth OU Ahtri tn 12 10151 <br /> Tallinn,Harju maakond,
                Estonia.
              </p>
            </li>
            <li className="my-7 md:flex xs:block gap-3">
              <h2 className="xs:flex justify-center align-center md:block">
                <IoCall />
              </h2>

              <p>
                <h2 className="xs:flex justify-center align-center md:block">
                  Phone
                </h2>
                +372 345 7224
              </p>
            </li>
          </ul>
          <Link to="" className="xs:flex justify-center align-center md:block">
            <button className="rounded-full bg-[orange] text-[20px] text-[white] px-10 py-3 relative mt-[70px] mb-[-40px]">
              Get in Touch!
            </button>
          </Link>
        </div>
        <div
          className="md:flex-shrink-0 w-[50%] h-[500px] xs:hidden md:block flex justify-center align-center"
          data-aos="fade-down"
        >
          <img
            className=" object-cover w-full  md:h-full md:w-full rounded"
            src={Image}
            alt="Img"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
