import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-yellow-400">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../data/pictures/logo.png")}
              alt="Saad"
              width={100}
              height={100}
              className="w-[55px]"
            />
            <span className="ml-3 text-xl">Saad's Portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Saad's Portfolio
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={
                "https://www.facebook.com/profile.php?id=100081053655323&mibextid=ZbWKwL"
              }
              className="text-gray-500"
            >
              <FaFacebook className="text-3xl hover:text-[#1877f2]" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/muhammad-saad-3338ab2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-[#0A66C2]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
