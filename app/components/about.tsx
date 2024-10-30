import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="bg-gray-50 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={require("../data/pictures/pic.png")}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-5 leading-relaxed">
              I have completed my intermediate studies and am currently pursuing
              a course in IT, specifically in AI. I am working on various areas,
              including NestJS, machine learning, and data analysis.
              Additionally, I have a strong passion for programming and AI,
              which I am exploring and learning about in depth.
            </p>
            <p className="mb-5 leading-relaxed">
              A dedicated and detail-oriented web developer with a strong
              passion for creating user-centric digital solutions. Proficient in
              HTML, CSS, JavaScript, and frameworks like React and Next.js. With
              a focus on responsive design and performance optimization, I
              strive to deliver high-quality code and seamless user experiences.
              Committed to continuous learning and adapting to new technologies,
              I thrive in collaborative environments and enjoy solving complex
              challenges.
            </p>
            <div className="flex justify-center">
              <a href={"/myCV.pdf"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
