import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEmail } from "@/states";
import { formatDate, getInitials } from "@/utils/helper";
import { Archive, Trash2 } from "lucide-react";
import { useContactMutation } from "@/hooks/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Content: FC = () => {
  const cache = useQueryClient();
  const { id, name, message, subject, date, email, setIsShowDelete } =
    useEmail();

  const { archiveEmail } = useContactMutation();

  const handleArchive = async () => {
    const response = await archiveEmail({ archived: true }, id);
    if (response.code === 200) {
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Confirmation",
        description: `${response.message}`,
      });
      cache.invalidateQueries({ queryKey: ["email_list"] });
    }
  };

  return (
    <div className="w-full md:w-2/3 flex flex-col">
      {id ? (
        <>
          <div className="flex gap-4 items-center border-b p-4">
            <Tooltip>
              <TooltipTrigger>
                <p className="text-[10px] font-[400] text-black">
                  <Trash2 size={18} onClick={() => setIsShowDelete(true)} />
                </p>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-[10px] font-[400] text-black">
                  <Archive size={18} onClick={handleArchive} />
                </p>
              </TooltipTrigger>
              <TooltipContent>Archive</TooltipContent>
            </Tooltip>
          </div>
          <div className="flex px-4 py-4 gap-2 w-full justify-between border border-t-0 border-l-0 border-r-0 border-[#e4e4e7]">
            <div className="flex justify-center items-center bg-gray-300 size-8 rounded-full ring-2 ring-white border text-[12px] font-[600]">
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
          <div className="flex justify-start items-start w-full overflow-y-auto p-4 text-start text-[.875rem] text-[#09090b] h-[-webkit-fill-available] leading-relaxed whitespace-pre-line">
            {message}
          </div>
          <div className="mt-auto border-t p-4">
            <Textarea className="text-sm" placeholder={`Reply to ${name}...`} />
            <div className="flex justify-end mt-2">
              <Button>Send</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center text-gray-500">Select an email to view.</p>
        </div>
      )}
    </div>
  );
};

export default Content;
