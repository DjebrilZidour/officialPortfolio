const Contact = () => {
  return (
    <section className="flex justify-center items-center w-full flex-col gap-16">
      <div>
        <h1>you can contact me by E-mail or phone number for pro contact </h1>
        <h2>
          and if you want to discuss with me in my field you can be comfortable
          contacting me by my instagram account{" "}
        </h2>
      </div>

      <div className="flex justify-center items-center gap-4 w-full">
        <div className="border-2 border-black flex justify-center items-center gap-4 flex-col p-4 w-1/2">
          <h1>my phone number</h1>
          <h2>+213 556 94 65 14</h2>
        </div>
        <div className="border-2 border-black flex justify-center items-center gap-4 flex-col p-4 w-1/2">
          <h1>my e-mail</h1>
          <h2>Djebril.zidour.pro@gmail.com</h2>
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 ">
        <div className="flex justify-center items-center flex-col gap-8">
          <h1>check my github over here</h1>
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/128/3792/3792702.png"
            alt=""
          />
        </div>

        <div className="flex justify-center items-center flex-col gap-8">
          <h1>check my instagram over here</h1>
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/128/3792/3792702.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-8">
          <h1>check my facebook over here</h1>
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/128/3792/3792702.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-8">
          <h1>check my likendin here</h1>
          <img
            className="w-24"
            src="https://cdn-icons-png.flaticon.com/128/3792/3792702.png"
            alt=""
          />
        </div>
      </div>

      <h1>can't wait to work with you</h1>
    </section>
  );
};
export default Contact;
