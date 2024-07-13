import workData from "../../assets/data/workData";
import { WorkPosition } from "../../model/work";
import { workPositionClassname } from "../../style/tailwindClassname/workPositions";

function WorkPositions() {
  const workPositions: WorkPosition[] =
    workData.workitems.workPositions;
  return (
    <>
      {workPositions.map((item, index) => (
        // <section
        //   key={index}
        //   className={workPositionClassname.main}
        // >
        <div
          key={index}
          className={workPositionClassname.workPostion}
        >
          <h3 className={workPositionClassname.title}>
            {item.workPosition}
          </h3>
          <div className="mb-1 flex gap-4">
            <p className="font-medium text-nowrap flex flex-col">
              <span>{item.workMonth}</span>
              <span>{item.workYear} </span>
            </p>
            <p>
              <a
                target="_blank"
                href={item.workLink}
                className="text-nowrap text-tertiary font-semibold"
              >
                {item.workTypology}
              </a>
              <br />
              {item.workDescription}
            </p>
          </div>
        </div>

        // </section>
      ))}
    </>
  );
}

export default WorkPositions;
