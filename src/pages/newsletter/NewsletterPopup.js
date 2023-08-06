import React, { useState, useEffect } from "react";
import { SITE } from "@config";
import FilledLikeSVG from "/assets/grey_newsletter_background.jpg";
import FilledLikeSVGDark from "/assets/dark_grey_newsletter_background.jpg";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get the current theme value and set the background image accordingly
  const currentTheme = localStorage.getItem("theme");
  const backgroundImage = FilledLikeSVG;
  // currentTheme === "dark" ? FilledLikeSVGDark : FilledLikeSVG;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
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

      // Update the response message based on the API response
      setResponse(data.message);

      // Check the API response and perform actions accordingly
      if (response.ok) {
        // Success: Response status 200
        // Perform any additional actions here, e.g., update UI, show success message, etc.
        console.log("Subscribed");
      } else {
        // Error or other response statuses
        console.log("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <section className="bg-gray-900 fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-opacity-75">
          <div className="md:w-8/12 lg:w-7/12 xl:w-6/12 bg-white relative w-8/12 shrink-0 grow-0 basis-auto rounded-lg border-2 p-6">
            <div
              className="absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <button
              className="text-gray-500 hover:text-gray-700 absolute right-0 top-0 p-4"
              onClick={handleClosePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.414 12l4.293 4.293a1 1 0 11-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 11-1.414-1.414L10.586 12 6.293 7.707a1 1 0 111.414-1.414L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="relative">
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold">
                  Subscribe to the Newsletter
                </h2>

                {/* <p className="text-neutral-500 dark:text-neutral-200 mb-6">
                  Get the latest trends, tips, and insights on how to make your
                  AI/ML/Data Science journey special, delivered straight to your
                  inbox.
                </p> */}
              </div>

              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="bg-transparent peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                    className="bg-transparent peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label
                    className="text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
              </form>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="bg-primary text-white hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mb-6 inline-block w-full rounded border-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
              {response && (
                <p
                  className={`text-sm ${
                    response === "Subscribed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {response}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NewsletterPopup;
