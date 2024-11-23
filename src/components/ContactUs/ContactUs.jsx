import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, {
        publicKey: process.env.YOUR_PUBLIC_KEY,
      })
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
    <section className="h-screen ">
    <form ref={form} onSubmit={sendEmail} className=" flex flex-col sm:max-w-[50rem] m-auto     ">
      <div className="text-3xl text-center mb-4">Feel Free to Contact Us</div>
      <label className=" ">Name</label>
      <input
        className="mb-4 border p-2 border-black drop-shadow-md"
        type="text"
        name="user_name"
      />
      <label className="">Email</label>
      <input
        className="mb-4 rounded border p-2 border-black drop-shadow-md"
        type="email"
        name="user_email"
      />
      <label className="">Message</label>
      <textarea
        className="mb-4 rounded border p-2 border-black drop-shadow-md"
        name="message"
        cols={30}
        rows={6}
      />
      <input
        className="bg-blue-500 hover:bg-blue-600 py-2 rounded drop-shadow-md text-white"
        type="submit"
        value="Send"
      />
    </form>
    </section>
  );
};
