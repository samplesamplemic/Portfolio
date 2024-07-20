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
          className={workPositionClassname.article}
        >
          <h3 className={workPositionClassname.h3}>
            {item.workPosition}
          </h3>
          <p className={workPositionClassname.p}>
            <span className={workPositionClassname.span}>
              <time>{item.workMonth}</time>
              <time>{item.workYear} </time>
            </span>
            <span>
              <a
                target="_blank"
                href={item.workLink}
                className={workPositionClassname.a}
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
