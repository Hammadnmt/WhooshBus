import { CirclePlus, CircleMinus, Circle } from "lucide-react";

export default function Timeline() {
  return (
    <div className="relative flex flex-col gap-[3rem]">
      {/* Start - Daska */}
      <div className="relative ml-[-3.25rem] mb-10">
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
          <CirclePlus size={20} />
        </div>
      </div>

      {/* End - Lahore */}
      <div className="relative ml-[-3.25rem] mb-10">
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-md">
          <CircleMinus size={20} />
        </div>
      </div>
    </div>
  );
}
