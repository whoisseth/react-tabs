/** @format */

import { cn } from "@/utils/cn";

interface TabType {
  isTabActive?: boolean;
  tabLabel: string;
  onClick?: () => void;
}

export function Tab({ isTabActive, tabLabel, onClick }: TabType) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 min-w-[100px]   border-x border-x-white  rounded   h-[44px]   flex items-center justify-center rounded-b-none  font-bold  -mb-[.8px]   border-t-transparent border-t-4 z-10 w-full ",
        {
          "bg-gray-700 text-white  border-t-[#76C3FF]  ": isTabActive,
          " bg-gray-300  text-black  ": !isTabActive
        }
      )}
    >
      {tabLabel}
    </button>
  );
}
