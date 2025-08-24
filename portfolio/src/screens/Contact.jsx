import React from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9q2qq87",
        "template_84a7f1n",
        e.target,
        "CVGcUKPae7mjePHGi"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error(error);
        }
      );

    e.target.reset();
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5 w-full px-4">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white text-center pt-5">
        Contact Me
      </h1>

      <form className="w-full max-w-xl mx-auto" onSubmit={sendEmail}>
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        {/* Subject */}
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Job opportunity, freelance project..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Write your message here..."
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Message
        </button>
      </form>

      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        type="button"
        className="text-white mt-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Go Back
      </button>
    </div>
  );
}

export default Contact;
