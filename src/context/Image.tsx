import React, { ReactNode, createContext, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../services/storage";

interface ImageContextType {
  image: {
    file: File | null;
    url: string | null;
  };
  isLoading: boolean;
  handleOpenImage: (selectedImage: File | null) => void;
}

const initialImageContext: ImageContextType = {
  image: {
    file: null,
    url: null,
  },
  isLoading: false,
  handleOpenImage: () => {},
};

export const ImageContext =
  createContext<ImageContextType>(initialImageContext);
export const ImageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const handleOpenImage = (selectedImage: File | null) => {
    if (selectedImage && selectedImage.type.includes("image")) {
      setIsLoading(true);
      setImage(selectedImage);
    }
  };

  const handleUploadImage = async (image: File) => {
    const fileExtension = image.name.split(".").pop();
    const storageRef = ref(storage, `images/${Date.now()}.${fileExtension}`);

    // `image` comes from the Blob or File API
    return await uploadBytes(storageRef, image);
  };

  React.useEffect(() => {
    if (!image) return;

    handleUploadImage(image).then((response) => {
      if (!response) return;
      setTimeout(() => setIsLoading(false), 5000);
      getDownloadURL(response.ref).then((url) => {
        setUrl(url);
      });
    });
  }, [image]);

  return (
    <ImageContext.Provider
      value={{
        image: {
          file: image,
          url,
        },
        isLoading,
        handleOpenImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
