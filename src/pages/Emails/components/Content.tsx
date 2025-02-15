import { FC } from "react";

const Content: FC = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[-webkit-fill-available]">
      <div className="flex flex-col">
        <div className="flex px-8 py-2 w-full border border-l-0 border-[#e4e4e7]">
          <p className="text-[16px] font-semibold">Inbox</p>
        </div>
        {/* Content Header */}
        <div className="flex px-8 py-4 gap-2 w-full justify-between border border-t-0 border-l-0 border-[#e4e4e7]">
          <div className="h-fit w-fit p-2 rounded-full bg-gray-200 text-[14px]">
            AS
          </div>
          <div className="flex flex-col items-start w-[70%] text-[14px] font-[500]">
            <p className="text-[14px]">Jane Doe</p>
            <p className="text-[12px] text-[#71717a] font-[400]">
              Interview Invitation
            </p>
            <p className="text-[12px] text-[#71717a] font-[400]">
              Reply-To: janedoe@gmail.com
            </p>
          </div>
          <div className="w-fit text-[12px] text-[#71717a]">
            <p className="text-end">Jan 20, 2024 - 10:30:00 AM</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div>asdasd</div>
      {/* Footer */}
      <div>asdas</div>
    </div>
  );
};

export default Content;
