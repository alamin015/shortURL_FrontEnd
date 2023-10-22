import React, { useRef, useState } from "react";
import useUrl from "../../hooks/useUrl";
import CopyText from "../../components/CopyText";
import { errorToasti } from "../../utilies/utilies";

const Home = () => {
  const urlRef = useRef(null);
  const [shortURL, setShortURL] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const axiosSecure = useUrl();

  //   handle form
  const handleURL = (e) => {
    e.preventDefault();
    setIsSend(true);
    const url = urlRef.current.value;
    // console.log(url);
    axiosSecure
      .post("/url", { url })
      .then((data) => {
        if (data.data.result.shortId && data.data.result.redirectUrl) {
          const actualURL = `${import.meta.env.VITE_BASE_URL}/${
            data.data.result.shortId
          }`;
          setShortURL(actualURL);
          setIsSend(false);
        }
      })
      .catch((err) => {
        setIsSend(false);
        errorToasti(err.message);
        // console.log(err.message);
      });
  };

  return (
    <div>
      <div className='container'>
        <div className='min-h-screen w-full flex items-center justify-center'>
          <div className='max-w-[600px] w-full bg-white rounded-md p-10 shadow-md'>
            <form className='h-full w-full'>
              <div className='flex items-center'>
                <input
                  type='text'
                  className='input'
                  placeholder='Paste a long URL'
                  name='url'
                  ref={urlRef}
                />
                <button onClick={handleURL} type='button' className='btn'>
                  {isSend ? (
                    <svg
                      className='animate-spin  mx-auto h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
            {/* jshd */}
            {shortURL && (
              <div className='mt-8'>
                <h3 className='text-2xl font-bold text-[#2a5bd7]'>
                  Your short link
                </h3>
                <p
                  className={`border flex items-center justify-between ${
                    isCopy ? "border-[#2a5bd7]" : "border-[#cccccc]"
                  }  mt-4 text-[rgba(0,0,0,0.8)] rounded-md py-2 px-4 select-all hover:cursor-text text-base`}
                >
                  {shortURL}
                  <CopyText text={shortURL} setIsCopy={setIsCopy} />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
