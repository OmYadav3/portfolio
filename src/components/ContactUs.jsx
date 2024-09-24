import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
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
    <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col px-96 ">
      <div className="text-5xl text-center font-bold">ContactUs</div>
      <label className="text-2xl px-2 ">Name</label>
      <input
        className="mb-4 rounded border-2 p-2 border-black"
        type="text"
        name="user_name"
      />
      <label className="text-2xl px-2 ">Email</label>
      <input
        className="mb-4 rounded border-2 p-2 border-black"
        type="email"
        name="user_email"
      />
      <label className="text-2xl px-2 ">Message</label>
      <textarea
        className="mb-4 rounded border-2 p-2 border-black"
        name="message"
      />
      <input
        className="bg-blue-600 hover:text-white px-8 py-4 rounded  "
        type="submit"
        value="Send"
      />
    </form>
  );
};
