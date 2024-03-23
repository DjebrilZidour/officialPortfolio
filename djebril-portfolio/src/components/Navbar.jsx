





const Navbar = () => {


  return (
    <>
     

      <nav
        style={{ backgroundColor: "#FFFDCB" }}
        className="shadow-lg px-16 py-2 rounded-bl-3xl"
      >
        <ul className="list-none flex justify-between items-center">
          <li className="flex justify-center items-center gap-2">
            


              <img className=" p-1 h-12 w-12 " src="https://cdn-icons-png.flaticon.com/128/15322/15322093.png" />
              <h1 className="text-3xl">Djebril Zidour</h1>
          
          </li>
          <img src="" alt="" />
          <div className="flex justify-between items-center text-black-100  max-sm:flex-col max-sm:hidden ">
           
              <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
                Home
              </li>
           
              <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
                skills
              </li>

            
              <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
                experiences
              </li>
            

          
              <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
               contact me
              </li>
           

           
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
