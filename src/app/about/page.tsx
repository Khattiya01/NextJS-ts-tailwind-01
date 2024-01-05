import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container-about">
      <div className="text-container-about">
        <h2 className="subtitle-about">About Agency</h2>
        <h1 className="title-about">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="desc-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          praesentium nisi? Temporibus beatae quae enim possimus iste cupiditate
          dignissimos architecto, tempora officia voluptatibus aspernatur
          provident harum rem, eligendi laborum deleniti.
        </p>
        <div className="boxs-about">
          <div className="box-about">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="box-about">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="box-about">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="image-container-about">
        <Image src={"/about.png"} alt={"about"} fill className=" "/>
      </div>
    </div>
  );
};
export default AboutPage;
