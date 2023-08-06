import React, { useState } from "react";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleSubmit = async () => {
    if (!name) {
      setErrorMsg("Please enter your name.");
    } else if (!email) {
      setErrorMsg("Please enter your email address.");
    } else if (!isValidEmail) {
      setErrorMsg("Please enter a valid email address.");
    } else {
      setErrorMsg("");
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://portfolio-api-pu4m.onrender.com/api/subscribers/add_activate/",
          {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setIsLoading(false);
          setName("");
          setEmail("");
          setIsValidEmail(false);
          setErrorMsg(data.message); // Assuming the response contains a "message" field
        } else {
          setErrorMsg("Error");
        }
      } catch (error) {
        setIsLoading(false);
        setErrorMsg("An error occurred.");
      }
    }
  };

  return (
    <div className="w-full rounded-lg border-2 p-8 text-center">
      <div className="flex flex-wrap justify-center">
        <div className="md:w-8/12 lg:w-7/12 xl:w-6/12 w-fit shrink-0 grow-0 basis-auto">
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">
              Subscribe to the newsletter
            </h2>
            <p className="text-wrap text-neutral-500 dark:text-neutral-400">
              Subscribe now to receive the latest trends, expert tips, and
              insightful guidance on how to make your AI/ML/Data Science journey
              truly exceptional. Stay up-to-date with the industry's
              cutting-edge advancements and unlock valuable insights, all
              conveniently delivered straight to your inbox. Don't miss out on
              this opportunity to enhance your knowledge and elevate your skills
              in the exciting world of AI. Sign up today and embark on a
              transformative learning experience!
            </p>
          </div>

          <dl className="lg:pt-2 grid grid-cols-1 gap-x-8 gap-y-10 p-10 sm:grid-cols-2">
            <div className="flex flex-col rounded-lg border-2">
              <div className="bg-white/5 rounded-md p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="text-white h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <dt className="text-white mt-4 font-semibold">Weekly articles</dt>
              <dd className="text-gray-400 mt-2 p-4 leading-7">
                Get the latest articles delivered straight to your inbox every
                week.
              </dd>
            </div>
            <div className="flex flex-col  rounded-lg border-2">
              <div className="bg-white/5 rounded-md p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="text-white h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <dt className="text-white mt-4 font-semibold">No spam</dt>
              <dd className="text-gray-400 mt-2 p-4 leading-7">
                No spam, ever. Your email address will only ever be used for the
                newsletter.
              </dd>
            </div>
          </dl>

          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="bg-transparent peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput90"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <label
                className="text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="exampleInput90"
              >
                Name
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="bg-transparent peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput91"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
              />
              <label
                className="text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                htmlFor="exampleInput91"
              >
                Email address
              </label>
            </div>
            <button
              type="button"
              className="bg-primary text-white hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mb-6 inline-block w-full rounded border-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
            {errorMsg && <p className="text-center text-sm">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
