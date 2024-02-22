import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-2 md:px-20 w-full bg-[#15213C] py-5 text-neutral-content border-b-2 border-gray-800 ">
      <span className="flex items-center gap-3 mb-1 ">
        <FaEnvelope size={35} />
        <h4 className="text-center  font-semibold">
          Email <br /> email@example.com
        </h4>
      </span>
      <span className="flex items-center gap-3 mb-1 ">
        <FaPhoneAlt size={35} />
        <h4 className="text-center  font-semibold cursor-pointer">
          Appellez Nous <br /> +212 654-845780
        </h4>
      </span>
      <span className="flex items-center gap-3 ">
        <FaMapMarkerAlt size={35} />
        <h4 className="text-center  font-semibold">
          Addresse <br /> addresse example
        </h4>
      </span>
    </div>
  );
}

export default Contact;
