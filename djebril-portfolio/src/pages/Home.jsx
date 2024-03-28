const Home = () => {
  return (
    <section className="flex justify-between items-center mx-12 my-8 bg-[url(https://i.ibb.co/RPYXJz6/Screen-Shot-2022-12-13-at-5-50-43-PM-copy.png)] bg-no-repeat bg-contain bg-center">
      <div className="flex flex-col items-start justify-center w-1/2 gap-4">
        <h1 className="text-5xl">Djebril Zidour </h1>
        <p className="text-3xl">
          {" "}
          hi, im djebril im a web developer and this is my portfolio
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="border px-4 py-2 hover:bg-red-500 hover:text-white rounded-xl text-2xl capitalize uppercase">
            click me{" "}
          </button>
          <button className="border px-4 py-2 hover:bg-red-500 hover:text-white rounded-xl text-2xl capitalize uppercase">
            {" "}
            learn more
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center  ">
        <img
          className=" w-full border-b-2 border-t-2 rounded-3xl shadow-lg "
          src=""
        ></img>
      </div>
    </section>
  );
};
export default Home;
