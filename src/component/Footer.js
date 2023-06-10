import line from "../assets/icons/Line2.png";
const Footer = () => {
  return (
    <section className="bg-white ">
      <div className="bg-white pt-11 md:ps-0 ps-10 font-Jakarta bottom-0">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-carblue font-Jakarta text-lg font-bold m-4 ps-0 md:ps-9">
              MORENT
            </h2>
            <p className="ps-0 md:ps-9 text-sm text-grayslate mt-3 mb-6 ms-4">
              Our vision is to provide convenience <br></br> and help increase
              your sales business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 ms-4 ps-0 gap-x-20 me-24 md:ps-9">
            <div className="flex gap-y-7 flex-col mb-3">
              <div className="text-lg">About</div>
              <div className="text-sm text-grayslate">How it works</div>
              <div className="text-sm text-grayslate">Featured</div>
              <div className="text-sm text-grayslate">Partnership</div>
              <div className="text-sm text-grayslate">Bussiness Relation</div>
            </div>
            <div className="flex gap-y-7 flex-col">
              <div className="text-lg">Community</div>
              <div className="text-sm text-grayslate">Events</div>
              <div className="text-sm text-grayslate">Blog</div>
              <div className="text-sm text-grayslate">Podcast</div>
              <div className="text-sm text-grayslate">Invite a friend</div>
            </div>
            <div className="flex gap-y-7 flex-col">
              <div className="text-lg">Socials</div>
              <div className="text-sm text-grayslate">Discord</div>
              <div className="text-sm text-grayslate">Instagram</div>
              <div className="text-sm text-grayslate">Twitter</div>
              <div className="text-sm text-grayslate">Facebook</div>
            </div>
          </div>
        </div>
        <img className="hidden md:block ms-11 mt-8" src={line} alt="" />
        <div className="flex gap-y-2 flex-col-reverse md:flex-row justify-between mx-3 md:mx-10 my-12 md:my-2 mb-0  text-sm font-Jakarta">
          <div>©2022 MORENT. All rights reserved</div>
          <div className="flex gap-x-6 me-28 pb-3">
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
