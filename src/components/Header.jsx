export const Header = () => {
  return (
    <div className="px-20 py-4 w-[1440px]">
      <div className="flex items-center  justify-between px-[32px] 	bg-neutral-200">
        <div className="items-center">
          <img className="" src="SS.svg" alt="" />
        </div>
        <div className="flex items-center gap-[24px]">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="flex items-center pl-6 gap-4">
            <img src="themeChange.svg" alt="" />
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};
