import { Card } from "@/components/ui/card";
import { FC } from "react";

const EmailList: FC = () => {
  return (
    <div className="flex flex-col justify-start items-start w-[40%]">
      <div className="flex px-8 py-2 w-full border border-gray-400">
        <p className="text-[16px] font-semibold">Inbox</p>
      </div>
      <div className="flex flex-col gap-2 px-8 py-2 w-full border border-gray-400 border-t-0">
        <input
          type="text"
          placeholder="Search"
          className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[300px] text-[12px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Card className="flex flex-col items-start p-4">
          <div className="flex justify-between items-center gap-2 w-full">
            <p className="text-[15px] font-semibold">Danesa Jane Buo</p>
            <p className="text-[12px]">Jan 20, 2024</p>
          </div>
          <p className="text-[14px] font-semibold">Interview Invitation</p>
        </Card>
      </div>
    </div>
  );
};

export default EmailList;
