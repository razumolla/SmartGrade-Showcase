const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#17956D] to-[#0F648C]  pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="max-w-screen-2xl mx-auto px-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 items-center mx-auto">
          <div className="lg:order-2 ml-auto">
            <img
              className="h-[500px] w-[500px] animate-wiggle-up-down"
              src="/src/assets/hero-graphics.svg"
              alt="school logo"
            />
          </div>

          <div>
            <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <a className="bg-[#172227] text-white px-5 py-2 rounded-full cursor-pointer">
              Get Admission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
