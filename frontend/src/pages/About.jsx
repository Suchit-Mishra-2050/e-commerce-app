import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            rerum sapiente laboriosam excepturi repellendus exercitationem eaque
            eligendi ut, atque ad assumenda, aspernatur repellat voluptatem
            facere sit. Architecto, ducimus. Laudantium, quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            hic, voluptatem, fuga modi molestiae perspiciatis facere voluptatum
            tempore rem libero assumenda aliquid odio, saepe numquam eligendi.
            Non quod quae aut?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            alias quis blanditiis illum, debitis minus quaerat nisi amet saepe.
            Neque facere, impedit amet magni praesentium nisi corrupti repellat
            dicta laborum.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            illum possimus aliquid explicabo tempora rem eius qui vel est culpa,
            at facere reprehenderit cupiditate ipsum sapiente magnam quod
            accusantium numquam.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            voluptates temporibus quis eveniet sequi veniam magni magnam autem
            iste ex laboriosam quibusdam, ipsa culpa voluptate suscipit, a natus
            atque facilis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            voluptates temporibus quis eveniet sequi veniam magni magnam autem
            iste ex laboriosam quibusdam, ipsa culpa voluptate suscipit, a natus
            atque facilis.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
