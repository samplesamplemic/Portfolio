import workData from "../../assets/data/workData";
import { WorkPosition } from "../../model/work";
import { workPositionClassname } from "../../style/tailwindClassname/workPositions";

function WorkPositions() {
  const workPositions: WorkPosition[] =
    workData.workitems.workPositions;
  return (
    <>
      {workPositions.map((item, index) => (
        <div
          key={index}
          className={workPositionClassname.main}
        >
          <div className={workPositionClassname.workPostion}>
            <div className={workPositionClassname.title}>
              {item.workPosition}
            </div>
            <div className="mb-1 flex gap-4 ">
              <div className="font-medium text-nowrap flex flex-col">
                <span>{item.workMonth}</span>
                <span>{item.workYear} </span>
              </div>
              <div>
                <a
                  target="_blank"
                  href={item.workLink}
                  className="text-nowrap text-tertiary font-semibold"
                >
                  {item.workTypology}
                  {/* {" | "} */}
                </a>
                <br />
                {item.workDescription}
              </div>
            </div>
            {/* <div className={workPositionClassname.workYear}>
              <span className="font-medium">
                {item.workYear}{" "}
              </span>
              <span>{item.workMonth}</span>
            </div> */}
            {/* {item.workDescription} */}
          </div>

          <hr className={workPositionClassname.divider} />
        </div>
      ))}
    </>
  );
}

export default WorkPositions;
