import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Image from "@assets/logolinkedin.png";
import "../App.css";

export default function Contact() {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => data;

  const [formIsFullFilled, setFormIsFullFilled] = useState(false);

  const handleChange = () => {
    for (const value of Object.values(getValues())) {
      if (!value) {
        return setFormIsFullFilled(false);
      }
    }
    return setFormIsFullFilled(true);
  };

  return (
    <div className="min-h-screen my-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-12" x>
              <h1 className="text-5xl text-gray-800 dark:text-white text-mada">
                Contact{" "}
                <span className="text-[#8ddc93] dark:text-[#ffdb20] font-bold text-atma">
                  Us!
                </span>
              </h1>
            </div>
            <div className="mx-auto max-w-lg">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor className="w-32 dark:text-white text-mada">
                      Firstname
                      <input
                        {...register("firstName", {
                          required: true,
                          maxLength: 20,
                          pattern: /^[A-Za-z]+$/i,
                          onChange: handleChange,
                          placeholder: "Jean",
                        })}
                        className="w-full bg-gray-100 rounded border focus:border-2 border-gray-300 focus:border-[#8ddc93] dark:focus:border-[#ffdb20] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </label>
                    {errors?.firstName?.type === "maxLength" && (
                      <p className="Require">
                        First name cannot exceed 20 characters
                      </p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                      <p className="Require">Alphabetical characters only</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor className="w-32 dark:text-white text-mada">
                      Lastame
                      <input
                        {...register("lastName", {
                          required: true,
                          maxLength: 20,
                          pattern: /^[A-Za-z]+$/i,
                          onChange: handleChange,
                          placeholder: "Dupont",
                        })}
                        className="w-full bg-gray-100 rounded border focus:border-2 border-gray-300 focus:border-[#8ddc93] dark:focus:border-[#ffdb20] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </label>
                    {errors?.lastName?.type === "maxLength" && (
                      <p className="Require">
                        First name cannot exceed 20 characters
                      </p>
                    )}
                    {errors?.lastName?.type === "pattern" && (
                      <p className="Require">Alphabetical characters only</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="w-32 dark:text-white text-mada"
                    >
                      Email
                      <input
                        {...register("email", {
                          required: true,
                          type: "email",
                          onChange: handleChange,
                        })}
                        placeholder="jean.dupont@exemple.com"
                        className="w-full bg-gray-100 rounded border focus:border-2 border-gray-300 focus:border-[#8ddc93] dark:focus:border-[#ffdb20] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </label>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="w-32 dark:text-white text-mada"
                    >
                      Message
                      <textarea
                        {...register("message", {
                          required: true,
                          onChange: handleChange,
                        })}
                        className="w-full bg-gray-100 rounded border focus:border-2 border-gray-300 focus:border-[#8ddc93] dark:focus:border-[#ffdb20] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      />
                    </label>
                  </div>
                </div>
                <div className="p-8 m-auto">
                  <Popup
                    trigger={
                      <button
                        type="submit"
                        disabled={!formIsFullFilled}
                        className="px-4 z-10 mb-4 border-2 text-atma font-bold border-white dark:border-gray-800 dark:text-zinc-800 text-center bg-[#8ddc93] dark:bg-[#ffdb20] hover:bg-green-600 dark:hover:bg-yellow-500 text-2xl text-white p-1.5 rounded-3xl disabled:bg-gray-300 dark:disabled:bg-gray-300 drop-shadow"
                      >
                        Submit!
                      </button>
                    }
                    position="right center"
                  >
                    <div className="w-32 lg:text-base dark:text-dark text-mada">
                      Thanks for your message, we will respond as soon as
                      possible !
                    </div>
                  </Popup>
                </div>
                <div className="p-2 w-full mt-8 border-t border-gray-200 text-center">
                  <div className="leading-normal mt-8 dark:text-white text-mada flex justify-around items-center">
                    <div className="mx-2">
                      Marie CLEMENSAT
                      <a
                        href="https://www.linkedin.com/in/marie-clemensat/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="w-8 pt-4 m-auto"
                          src={Image}
                          alt="LogoName"
                        />
                      </a>
                    </div>
                    <div className="mx-2">
                      Matthieu ELIE
                      <a
                        href="https://www.linkedin.com/in/matthieuelie/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="w-8 pt-4 m-auto"
                          src={Image}
                          alt="LogoName"
                        />
                      </a>
                    </div>
                    <div className="mx-2">
                      Théo MICALETTI
                      <a
                        href="https://www.linkedin.com/in/theo-micaletti/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="w-8 pt-4 m-auto"
                          src={Image}
                          alt="LogoName"
                        />
                      </a>
                    </div>
                    <div className="mx-2">
                      Simon THORE
                      <a
                        href="https://www.linkedin.com/in/simon-thore-a2b43a212/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="w-8 pt-4 m-auto"
                          src={Image}
                          alt="LogoName"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
