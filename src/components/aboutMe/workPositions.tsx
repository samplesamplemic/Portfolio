import workData from "../../assets/data/workData";
import { WorkPosition } from "../../model/work";
import { workPositionClassname } from "../../style/tailwindClassname/workPositions";

function WorkPositions() {
  const workPositions: WorkPosition[] =
    workData.workitems.workPositions;
  return (
    <>
      {workPositions.map((item, index) => (
        <article
          key={index}
          className={workPositionClassname.workPostion}
        >
          <h3 className={workPositionClassname.title}>
            {item.workPosition}
          </h3>
          <p className="mb-1 flex gap-4">
            <span className="font-medium text-nowrap flex flex-col">
              <time>{item.workMonth}</time>
              <time>{item.workYear} </time>
            </span>
            <span>
              <a
                target="_blank"
                href={item.workLink}
                className="text-nowrap text-tertiary font-semibold"
              >
                {item.workTypology}
              </a>
              <br />
              {item.workDescription}
            </span>
          </p>
        </article>
      ))}
    </>
  );
}

export default WorkPositions;
