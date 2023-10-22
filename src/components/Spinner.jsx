import React from "react";
import { LineWave } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className='w-full h-screen bg-[#000000e8] flex items-center justify-center'>
      <LineWave
        height='200'
        width='200'
        color='#fff'
        ariaLabel='line-wave'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        firstLineColor='#FFFF00'
        middleLineColor='#fff'
        lastLineColor='#FFFF00'
      />
    </div>
  );
};

export default Spinner;
