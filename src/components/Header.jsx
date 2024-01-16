export const Header = () => {
  return (
    <div className="flex items-center  justify-between px-8 py-4	bg-neutral-200 	">
      <div>
        <p>SS/</p>
      </div>
      <div className="flex gap-10 text-gray-600 text-base font-medium	 ">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <img src="" alt="" />

        <button className="w-34 h-9 bg-gray-900 text-gray-50 rounded-xl	px-4 ">
          Download CV
        </button>
      </div>
    </div>
  );
};

// color: var(--Gray-600, #4B5563);
// /* Body2/Medium - All */
// font-family: Inter;
// font-size: 16px;
// font-style: normal;
// font-weight: 500;
// line-height: 24px; /* 150% */
