import { useState } from "react"
import HackerImage from "./assets/hacker.png"
import CoverImage from "./assets/cover.jpg"
export default function App() {
  const [url, setUrl] = useState('');

  return (
    <div className="dark:bg-gray-800 flex min-h-screen">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-8 sm:px-32 md:px-64 lg:px-80 xl:px-96">
          <div className="-mt-24 sm:-mt-64 flex flex-col items-center justify-center space-y-16 sm:space-y-32">
            <div className="flex flex-row items-center space-x-2">
              <img
                alt="Your Company"
                src={HackerImage}
                className="h-10 w-auto"
              />
              <p className="dark:text-gray-100 text-lg text-gray-900">AntiPhish</p>
            </div>
            <div className="flex items-center flex-col space-y-2">
              <h2 className="dark:text-gray-100 text-xl sm:text-4xl font-bold text-gray-900">
                Phishing website detector
              </h2>
              <p className="dark:text-gray-300 text-sm sm:text-lg text-gray-700">
                Detect phishing or fraudulent website with an ML-powered real-time phishing link detector.
              </p>
            </div>
          </div>
          <div className="mt-16 sm:mt-32">
            <div className="mx-auto w-full">
              <div className="mt-2">
                <div>
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="dark:text-gray-200 block text-sm font-medium leading-6 text-gray-900">
                        Website URL
                      </label>
                      <div className="mt-2">
                        <input
                          value={url}
                          onInput={(e) => {
                            setUrl(url => e.target.value)
                          }}
                          id="url"
                          name="url"
                          type="url"
                          required
                          autoComplete="url"
                          className="block dark:bg-white/5 dark:text-white dark:ring-white/10 dark:focus:ring-indigo-500 text-gray-900 text-xl w-full rounded-md border-0 py-1.5 sm:py-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-1.5 sm:py-4 text-sm sm:text-xl font-semibold leading-6 text-white shadow-sm dark:hover:bg-indigo-400 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-indigo-500 focus-visible:outline-indigo-600"
                      >
                        Check
                      </button>
                    </div>
                  </form>
                </div>

                {/* <div className="mt-10">
                <div className="relative">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">Google</span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-[#24292F]">
                      <path
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">GitHub</span>
                  </a>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative hidden w-0 flex-1 lg:block">
          <img
            alt=""
            src={CoverImage}
            className="object-contain inset-0 h-full w-full"
          />
        </div> */}
      </div>
    </div>
  )
}
