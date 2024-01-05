import Image from "next/image";

export default function Home() {
  return (
    <main className="container-home">
      <div className="text-container-home">
        <h1 className="text-title-container-home">Creative Thoughts Agency.</h1>
        <p className="text-desc-container-home">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum
          vitae adipisci suscipit repellendus perspiciatis tempore ut, sapiente
          consequatur explicabo quasi quia nobis sunt libero sit autem. Saepe,
          nostrum beatae.
        </p>
        <div className="button-container-home">
          <button className="button-home">Learn More</button>
          <button className="button-home">Contact</button>
        </div>
        <div className="brand-home">
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className="brand-img-home"
          />
        </div>
      </div>
      <div className="image-container-home">
        <Image src="/hero.gif" alt="hero" fill className="hero-img-home" />
      </div>
    </main>
  );
}
