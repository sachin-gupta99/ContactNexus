import React, { forwardRef } from "react";
import { useState } from "react";

const ImagePicker = forwardRef(({ label, name }, ref) => {
  const [image, setImage] = useState(null);
  const handlePickClick = (event) => {
    ref.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <div className="flex items-center gap-[1.5rem] mb-[1rem]">
        <div className="w-[10rem] h-[10rem] border-2 border-gray-500 rounded-lg flex justify-center items-center text-center text-gray-900 relative">
          {image && (
            <img
              src={image}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          )}
          {!image && <p className="m-0 p-[1rem]">No image picked yet.</p>}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png image/jpeg image/jpg"
          name={name}
          ref={ref}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="border-0 py-[0.5rem] px-[1.5rem] bg-gray-900 rounded-lg cursor-pointer text-white font-bold hover:bg-gray-600 transition-colors duration-300 ease-in-out active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
});

export default ImagePicker;
