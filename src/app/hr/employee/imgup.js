import { useState } from 'react';
import default_img from '../../../Images/defult.jpg'
import Image from 'next/image';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        {/* Default image */}
        <Image
          src={image || default_img } // Use your default image path
          alt="Default"
          width={500} // Set the width of the image
          height={500} // Set the height of the image
          className="max-w-full h-auto rounded-md cursor-pointer"
        />

        {/* Upload option on hover */}
        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-lg">Upload Image</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
