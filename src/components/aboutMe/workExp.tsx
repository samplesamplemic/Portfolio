import workData from "../../assets/data/workData";
import { WorkPosition } from "../../model/dataInterfaces";

function WorkExp() {
  const workPositions: WorkPosition[] = workData.workPositions;
  return (
    <>
      {workPositions.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="text-lg font-medium text-secondary">
              {item.workPosition}
            </div>
            <div className="italic">
              <a target="_blank" href={item.workLink} className="">
                {item.workTypology}
              </a>
            </div>
            <div className="flex gap-4 mb-1">
              <span className="font-medium">{item.workYear} </span>
              <span>{item.workMonth}</span>
            </div>
            {item.workDescription}
          </div>

          <hr className="w-1 h-1 bg-white border-0 rounded-sm bg-opacity-40" />
        </div>
      ))}
    </>
  );
}

export default WorkExp;
