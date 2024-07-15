const Navbar = () => {
  return (
    <section className="bg-gradient-to-r from-[#17956D] to-[#0F648C]">
      <div className="max-w-screen-2xl mx-auto  flex justify-items-center justify-between py-6 px-4">
        <div>
          <a href="/">
            <img
              className="h-[40px]"
              src="/src/assets/lws-logo-en.svg"
              alt="school logo"
            />
          </a>
        </div>
        <div className="bg-[#172227] text-white px-5 py-2 rounded-full cursor-pointer">
          <h1>Get Admission</h1>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
