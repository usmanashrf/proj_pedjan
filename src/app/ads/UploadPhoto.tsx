import React from "react";

const UploadPhoto = () => {
  return (
    <div>
      <h3 className="font-semibold md:text-3xl text-2xl  mb-6">Upload Photos</h3>
      {/* Upload Div */}
      <div className="flex flex-col items-center justify-center gap-y-5 bg-white border border-black/25 rounded-md w-full min-h-[387px]" >
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.7564 48.3735H34.7054H32.2681H31.7417V36.2329H35.7123C36.7192 36.2329 37.3143 35.0887 36.7192 34.2648L28.9955 23.5774C28.5035 22.8909 27.4851 22.8909 26.9931 23.5774L19.2693 34.2648C18.6743 35.0887 19.2579 36.2329 20.2763 36.2329H24.2468V48.3735H23.7205H21.2832H10.7904C4.783 48.0417 0 42.4234 0 36.3359C0 32.1365 2.27707 28.4748 5.65264 26.4953C5.34369 25.66 5.18349 24.7675 5.18349 23.8292C5.18349 19.5382 8.65059 16.0711 12.9416 16.0711C13.8684 16.0711 14.7609 16.2313 15.5962 16.5402C18.0793 11.2766 23.4344 7.62646 29.6592 7.62646C37.7148 7.63791 44.3515 13.8055 45.1067 21.6665C51.2971 22.7307 56 28.4634 56 34.9514C56 41.8856 50.5991 47.8929 43.7564 48.3735Z"
            fill="#444444"
          />
        </svg>
        <p className="text-[#444444] font-normal text-base flex-wrap text-center max-w-[750px] max-md:px-3 max-sm:text-sm   ">
          Drag photos into this field or choose some from your computer or
          device by clicking &quot;Add 
           photos&quot;. The maximum number of photos is 30
        </p>
        <button className="bg-primary text-white px-8 py-4 flex justify-center items-center gap-x-1 rounded-lg mt-1 text-sm">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10.5H15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15.5V5.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add photos
        </button>
      </div>
      {/* Note */}
      <p className="text-[#444444] font-normal text-base mt-2 tracking-normal   max-sm:text-sm     ">
        <b>Note:</b> The photo format you can upload is JPG or JPEG. If you do not add photos of the ad within the next 3 days, we will be forced to remove the ad from the site.
      </p>
    </div>
  );
};

export default UploadPhoto;
