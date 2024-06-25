import { useState, useLayoutEffect } from "react";
import "react-medium-image-zoom/dist/styles.css";

export const CustomZoomContent = ({
  buttonUnzoom, // default unzoom button
  modalState, // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
  img, // your image, prepped for zooming
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    if (modalState === "LOADED") {
      setIsLoaded(true);
    } else if (modalState === "UNLOADING") {
      setIsLoaded(false);
    }
  }, [modalState]);

  const classCaption = isLoaded
    ? "zoom-caption--loaded"
    : "zoom-caption";

  return (
    <>
      {buttonUnzoom}
      <figure className="flex w-[30%] text-center">
        {img}
        <figcaption
          className={`${classCaption} z-10 bg-[rgba(0,0,0)] text-white p-8`}
        >
          {console.log(img)}
          {img.props.alt}
          {/* <cite className="zoom-caption-cite">
            <br />
            <a className="zoom-caption-link" href={img.props.id}>
              {img.props.alt}
            </a>
          </cite> */}
        </figcaption>
      </figure>
    </>
  );
};
