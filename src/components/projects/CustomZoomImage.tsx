import "react-medium-image-zoom/dist/styles.css";
import { ProjectObject } from "../../model/portfoglio";

function CustomZoomImage(data) {
  return (
    <>
      <img src={data.img.img} alt="" />
      {/* <figure className="flex w-[30%] text-center">
        {data.img}
        <figcaption className={`z-10 bg-[rgba(0,0,0)] text-white p-8`}>
          {data.description}
          <cite className="zoom-caption-cite">
            <a className="zoom-caption-link" href={data.githubSource}>
              {data.title}
            </a>
          </cite>
        </figcaption>
      </figure> */}
    </>
  );
}

export default CustomZoomImage;
