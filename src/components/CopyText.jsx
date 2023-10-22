import React from "react";
import { PiCopySimpleThin } from "react-icons/pi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { successToasti } from "../utilies/utilies";

const CopyText = ({ text, setIsCopy }) => {
  const handleToast = () => {
    successToasti("Link Coppied");
    setIsCopy(true);
  };
  return (
    <CopyToClipboard text={text}>
      <button onClick={handleToast}>
        <PiCopySimpleThin
          className='hover:text-[#2a5bd7] transition-all'
          size={16}
        />
      </button>
    </CopyToClipboard>
  );
};

export default CopyText;
