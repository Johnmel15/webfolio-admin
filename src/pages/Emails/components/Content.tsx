import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEmail } from "@/states";
import { formatDate, getInitials } from "@/utils/helper";
import { Trash2 } from "lucide-react";
import { FC } from "react";

const Content: FC = () => {
  const { id, name, message, subject, date, email } = useEmail();


  return id ? (
    <div className="flex flex-col justify-between w-full h-[100%]">
      <div className="flex flex-col h-[20%]">
        <div className="flex px-4 py-3 w-full  border border-l-0 border-[#e4e4e7]">
          <Tooltip>
            <TooltipTrigger><Trash2 className="w-4 h-4" /></TooltipTrigger>
            <TooltipContent>
              Delete
            </TooltipContent>
          </Tooltip>
        </div>
        {/* Content Header */}
        <div className="flex px-4 py-4 gap-2 w-full justify-between border border-t-0 border-l-0 border-[#e4e4e7]">
          <div className="flex justify-center items-center bg-gray-300 size-8 rounded-full ring-2 ring-white border border-1 text-[12px] font-[600]">
           {getInitials(name)}
          </div>
          <div className="flex flex-col items-start w-[70%] text-[14px] font-[500]">
            <p className="text-[14px]">{name}</p>
            <p className="text-[12px] text-[#71717a] font-[400]">{subject}</p>
            <p className="text-[12px] text-[#71717a] font-[400]">
              Reply-To: {email}
            </p>
          </div>
          <div className="w-fit text-[12px] text-[#71717a]">
            <p className="text-end">{formatDate(date)}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex justify-start items-start border border-t-0 border-l-0 w-full h-[53.7vh] max-h-[53.7vh] overflow-y-auto p-4 text-start text-[.875rem] leading-relaxed whitespace-pre-line">
        {message}
      </div>
      {/* Footer */}
      <div className="border border-t-0 border-l-0 w-full h-auto p-4">
        <Textarea className="text-[12px]" placeholder={`Reply ${name}...`}></Textarea>
        <div className="flex justify-end mt-2">
          <Button>Send</Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center border border-1 border-l-0 w-full h-auto">
      <p className="text-[14px] font-[500]">Select an email to view.</p>
    </div>
  );
};

export default Content;
