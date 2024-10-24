import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Link from "next/link";

function Footer() {
  return (
    <div className=" bg-gray-900 p-7 w-full ">
      <div className="flex flex-row justify-between lg:mx-32 mx-16 lg:gap-52 gap-12">
        <div className="flex gap-5 flex-col">
          <h1 className="text-blue-400 font-bold text-4xl hover:text-blue-200 ">
            eTrade
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ipsa
            consectetur impedit amet explicabo
          </p>
          <div className="flex flex-row gap-5 text-black">
            <CiYoutube className=" bg-white rounded-full w-9 h-9 p-2" />
            <FaTwitter className="bg-white rounded-full w-9 h-9 p-2 " />
            <FaFacebookF className="bg-white rounded-full w-9 h-9 p-2 " />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Our Store</h1>
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">Contact</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <span className="flex flex-row gap-3 ">
            <FaPhoneAlt />
            <p>2027-8767-4523</p>
          </span>
          <span className="flex flex-row gap-3">
            <MdEmail />
            <p>info@example.com</p>
          </span>
          <span className="flex flex-row gap-3">
            <IoLogoWhatsapp />
            <p>+91-9876543210</p>
          </span>
        </div>
      </div>

      <div className="pt-7 w-full text-center ">
        Copyright © 2024 eTRADE | All rights reserved
      </div>
    </div>
  );
}

export default Footer;
