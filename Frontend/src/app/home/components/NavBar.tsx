const navtabs=["Home","About Us","Contact Us"]

export const NavBar = () => {
    return (
      <div className=" flex justify-center items-center w-[90%] h-[70px] bg-white rounded-xl shadow-md overflow-hidden mt-6 mx-auto">
        <div className=" z-10 flex items-center justify-center w-[20%] bg-white h-full">
         <span className=" text-3xl font-poppins font-[400] font-bold">LOGO</span>
        </div>
        <div className="z-10 flex items-center justify-around w-[60%] bg-white h-full p-14">
          {navtabs.map((items,index)=>(<span className=" text-xl font-poppins font-[400] font-bold" key={index}> {items}</span>))}
          
        </div>
        <div className=" z-10 flex justify-center items-center w-[20%] h-full bg-white">
          <button className="w-[70%] h-[80%] border-[3px] border-emerald-700 rounded-2xl bg-emerald-400">
            <span className=" flex justify-center items-center text-white text-3xl font-poppins font-[400] font-bold"> Get Started
            </span>
          </button>
        </div>
      </div>
    );
  };
  