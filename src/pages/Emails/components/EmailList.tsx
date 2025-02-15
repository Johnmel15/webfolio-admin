import { Card } from "@/components/ui/card";
import { FC } from "react";

const EmailList: FC = () => {
  return (
    <div className="flex flex-col justify-start items-start w-[40%]">
      <div className="flex px-8 py-2 w-full border border-[#e4e4e7]">
        <p className="text-[16px] font-semibold">Inbox</p>
      </div>
      <div className="flex flex-col gap-2 px-8 py-2 w-full border border-[#e4e4e7] border-t-0 h-full">
        <input
          type="text"
          placeholder="Search"
          className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[300px] text-[12px] px-4 py-2 border border-[#e4e4e7] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Card className="flex flex-col items-start p-4">
          <div className="flex justify-between items-center gap-2 w-full">
            <p className="text-[14px] font-[500]">Jane Doe</p>
            <p className="text-[10px] font-[400] text-[#71717a]">
              Jan 20, 2024
            </p>
          </div>
          <p className="text-[12px] font-[500]">Interview Invitation</p>
          {/* #71717a */}
          <p className="text-[12px] font-[500] text-[#71717a] text-start mt-2 line-clamp-2">
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success. Please come prepared with any questions or insights you may
            have. Looking forward to
          </p>
        </Card>
        <Card className="flex flex-col items-start p-4">
          <div className="flex justify-between items-center gap-2 w-full">
            <p className="text-[14px] font-[500]">Alice Smith</p>
            <p className="text-[10px] font-[400] text-[#71717a]">
              Jan 20, 2024
            </p>
          </div>
          <p className="text-[12px] font-[500]">Re: Project Update</p>
          {/* #71717a */}
          <p className="text-[12px] font-[500] text-[#71717a] text-start mt-2 line-clamp-2">
            Thank you for the project update. It looks great! I've gone through
            the report, and the progress is impressive. The team has done a
            fantastic job, and I appreciate the hard work everyone has put in. I
            have a few minor suggestions that I'll include in the attached
            document. Let's discuss these duri
          </p>
        </Card>
      </div>
    </div>
  );
};

export default EmailList;
