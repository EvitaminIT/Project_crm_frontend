import index from "@/material_component/client_component";
 
export function TwitterChatboxTextarea() {
  return (
    <div className="flex w-full flex-row items-center gap-2 border border-gray-900/10 ">
      <div className="flex">
        <index.IconButton variant="text" className="rounded-full p-2">
          <index.LocalHospitalOutlinedIcon/>
        </index.IconButton>
      </div>
      <index.Textarea
        rows={1}
        resize={true}
        placeholder="Your Message"
        className="min-h-full !border-0 focus:border-transparent p-2"
        containerProps={{
          className: "grid h-full",
        }}
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <div className="bg-[#67B037] rounded-br-lg">
        <index.IconButton variant="text" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </index.IconButton>
      </div>
    </div>
  );
}