import { FC, Fragment } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetAllEmailsQuery } from "@/hooks/queries";
import { useEmail } from "@/states";
import { formatDate, formatRelativeDate } from "@/utils/helper";

const EmailList: FC = () => {
  const { dataEmail, loadingEmail } = useGetAllEmailsQuery();
  const handleEmail = useEmail((state) => state.handleEmail);
  const isSelected = useEmail((state) => state.isSelected);
  const setIsSelected = useEmail((state) => state.setIsSelected);
  console.log(dataEmail)
  console.log(isSelected)
  return (
    <div className="w-full md:w-1/3 border-r p-4 ">
      <h2 className="text-xl font-semibold">Inbox</h2>
      <input
        type="text"
        placeholder="Search"
        className="w-full mt-2 p-2 border rounded-md"
      />
      <div className="mt-4 space-y-2 overflow-y-auto h-[65vh]">
        {!loadingEmail &&
          dataEmail.map((email: any, idx: number) => (
            <Fragment key={idx}>
              <Card
                className={`group flex flex-col items-start p-4 hover:bg-gray-100 cursor-pointer ${isSelected === email._id ? 'bg-gray-100 border-black' : ''}`}
                onClick={() => {
                  setIsSelected(email._id)
                  handleEmail(
                    String(email._id),
                    email.name,
                    email.subject,
                    email.createdAt,
                    email.message,
                    email.email
                  );
                }}
              >
                <div className="flex justify-between items-center gap-2 w-full">
                  <p className="text-[14px] font-[500]">{email.name}</p>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-[10px] font-[400] text-[#71717a]">
                        {formatRelativeDate(email.createdAt)}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      {formatDate(email.createdAt)}
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-[12px] font-[500]">{email.subject}</p>
                <p className="text-[12px] font-[500] text-[#71717a] text-start mt-2 line-clamp-2">
                  {email.message}
                </p>
              </Card>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default EmailList;
