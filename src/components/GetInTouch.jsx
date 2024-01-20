export const GetInTouch = () => {
  return (
    <div className="bigContainer gap-12 flex flex-col">
      <div className="tagContainer">
        <p className="tagStyle">Get in touch</p>
        <p className="text-xl m-auto w-[576px]">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="w-[550px] m-auto flex flex-col gap-4">
        <div className=" w-[500px] flex gap-5 m-auto">
          <img src="getintouch1.svg" alt="" />
          <h1>reachsagarshah@gmail.com</h1>
          <img src="getintouch2.svg" alt="" />
        </div>
        <div className=" w-[500px] flex gap-5 m-auto">
          <img src="getintouch3.svg" alt="" />
          <h1>+91 8980500565</h1>
          <img src="getintouch2.svg" alt="" />
        </div>
      </div>
      <div className="tagContainer">
        <p>You may also find me on these platforms!</p>
        <div className="flex gap-1 w-100 m-auto">
          <button>
            <img src="hero5.svg" alt="" />
          </button>
          <button>
            <img src="hero3.svg" alt="" />
          </button>
          <button>
            <img src="hero4.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
