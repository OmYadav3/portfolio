import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className=" ContactUs lg:h-screen " id="contact">
      <div className="headling text-center text-3xl lg:text-7xl font-bold mt-[2rem] lg:drop-shadow-lg">
        ContactUs
      </div>
      <div className=" Image-bg mx-4 p-[2.5rem]  flex justify-center items-center ">
        <div className="hidden lg:visible h-full w-full m-2 lg:shadow-lg">
          <img
            className="h-full w-full rounded lg:shadow-lg"
            src="CNT.jpg"
            alt="notfound"
          />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col rounded-lg h-full lg:w-[65%] lg:px-[2rem] lg:py-[2.4rem] lg:shadow-lg"
        >
          <label className=" ">Name</label>
          <input
            className="mb-4 border p-2 border-black drop-shadow-lg "
            type="text"
            name="user_name"
          />
          <label className="">Email</label>
          <input
            className="mb-4 rounded border p-2 border-black drop-shadow-lg"
            type="email"
            name="user_email"
          />
          <label className="">Message</label>
          <textarea
            className="mb-4 rounded border p-2 border-black drop-shadow-lg"
            name="message"
            cols={30}
            rows={6}
          />
          <input
            className="bg-blue-500 hover:bg-blue-600 py-2 rounded drop-shadow-lg text-white hover:scale-105"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};
