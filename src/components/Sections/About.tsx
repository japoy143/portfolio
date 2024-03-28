type AboutProps = {
  isdark: boolean;
  theme: string;
  reverse: string;
};

function About({ theme, reverse }: AboutProps) {
  return (
    <div
      id="about_me"
      className=" h-screen block sm:grid grid-cols-3  "
      style={{ backgroundColor: reverse, color: theme }}
    >
      <section className=" col-span-2  flex flex-row justify-center items-center px-8 text-justify">
        <article className=" font-custom  font-medium px-4 text-base sm:text-3xl">
          <h1 className=" text-xl sm:text-4xl">
            Hi, I'm Rainier I. Lesondato II.
          </h1>
          <br />
          <p className=" indent-6">
            Since I was young, I've been fascinated by technology and how it
            functions. I'm constantly attempting to adapt to new technologies,
            and disassembling electronic components is one of my hobbies.
            Through this pastime, I've learned a few things that have helped me
            develop some new skills, but it was always my curiosity that drove
            me to do it.
          </p>
        </article>
      </section>

      <section
        className={` flex flex-row  justify-end  items-center bg-[#E3E1D9]`}
      >
        <aside>
          <img
            src="/images/me.png"
            className=" object-cover"
            height={400}
            width={500}
          />
        </aside>
      </section>
    </div>
  );
}

export default About;
