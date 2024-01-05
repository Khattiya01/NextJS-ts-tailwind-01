import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="container-about">
        <Image src="/cityLondon.webp" alt="about" fill/>
      </div>
    </div>
  );
};
export default AboutPage;
