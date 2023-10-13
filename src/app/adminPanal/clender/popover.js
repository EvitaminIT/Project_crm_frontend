import React from "react";
import index from "@/material_component/client_component";

export function PopoverWithDescription({
  title,
  to,
  task_description,
  language,
  selected_date,
  comparision_date,
}) {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

 if(selected_date===comparision_date){
  return (
    <index.Popover open={openPopover} handler={setOpenPopover}>
      <index.PopoverHandler {...triggers}>
        <index.Button className="p-0 rounded-md py-[3px] bg-[#67B037]">{title}</index.Button>
      </index.PopoverHandler>
      <index.PopoverContent {...triggers} className="z-50 max-w-[26rem]">
        <div className="mb-2 flex items-center gap-3">
          <index.Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-medium transition-colors hover:text-gray-900"
          >
            {to}
          </index.Typography>
        </div>
        <index.Typography variant="small" color="gray" className="font-normal">
          {task_description}
        </index.Typography>
        <div className="mt-4 flex items-center gap-5">
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-blue-700" />
            <index.Typography color="gray" className="text-xs font-normal">
              {language}
            </index.Typography>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <index.Typography color="gray" className="text-xs font-normal">
              Veritied
            </index.Typography>
          </div>
        </div>
      </index.PopoverContent>
    </index.Popover>
  );
 }
}

export default PopoverWithDescription;
