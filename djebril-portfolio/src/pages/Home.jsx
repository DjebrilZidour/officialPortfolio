const Home = ()=>{
    return(
        <section className="flex justify-between items-center mx-12 my-8">
            <div className="flex flex-col items-start justify-center w-1/2 gap-4">
                <h1 className="text-5xl">Djebril Zidour </h1>
                <p className="text-3xl"> hi, im djebril im a web developer and this is my portfolio</p>
                <div className="flex justify-center items-center gap-4">
                    <button className="border px-4 py-2 ">click me </button>
                    <button className="border px-4 py-2 "> learn more</button>
                </div>
            </div>
            <div className="w-1/2">
                <img className="rounded-3xl w-full" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
        </section>
    )
}
export default Home