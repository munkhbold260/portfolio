export const GetInTouch = () => {
  return (
    <div className="px-4 py-16 flex flex-col gap-6 bg-red-300">
      <div className="flex flex-col gap-4">
        <p className="tagStyle">Get in touch</p>
        <p className="text-2xl m-auto">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className=" m-auto flex flex-col gap-4">
        <div className="flex gap-4 text-red-500">
          <img src="getintouch1.svg" alt="" />
          <p className="text-lg text-gray-900 font-semibold">
            reachsagarshah@gmail.com
          </p>
          <img src="getintouch2.svg" alt="" />
        </div>
        <div className="flex">
          <img src="getintouch3.svg" alt="" />
          <p className="text-gray-900 text-lg font-semibold m-auto">
            +91 8980500565
          </p>
          <img src="getintouch2.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center m-auto">
        <p>You may also find me on these platforms!</p>
        <div className="flex  gap-1 m-auto">
          <img src="hero5.svg" alt="" />
          <img src="hero3.svg" alt="" />
          <img src="hero4.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
