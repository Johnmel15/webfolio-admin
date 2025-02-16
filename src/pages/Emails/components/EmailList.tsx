import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetAllEmailsQuery } from "@/hooks/queries";
import { useEmail } from "@/states";
import { formatDate, formatRelativeDate } from "@/utils/helper";
import { FC, Fragment } from "react";

const EmailList: FC = () => {
  const { dataEmail, loadingEmail } = useGetAllEmailsQuery();
  const handleEmail = useEmail((state) => state.handleEmail);

  return (
    <div className="flex flex-col justify-start items-start w-[40%]">
      <div className="flex px-8 py-2 w-full border border-[#e4e4e7]">
        <p className="text-[16px] font-semibold">Inbox</p>
      </div>
      <div className="flex px-8 py-2 w-full border border-t-0 border-[#e4e4e7]">
        <input
          type="text"
          placeholder="Search"
          className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[300px] text-[12px] px-4 py-2 border border-[#e4e4e7] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col gap-2 px-8 py-2 w-full border border-[#e4e4e7] border-t-0 h-full max-h-[74vh] overflow-y-auto">
        {!loadingEmail &&
          dataEmail.map((email: any, idx: number) => {
            return (
              <Fragment key={idx}>
                <Card
                  className="group flex flex-col items-start p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleEmail(
                      String(email.id),
                      email.name,
                      email.subject,
                      email.createdAt,
                      email.message,
                      email.email
                    )
                  }
                >
                  <div className="flex justify-between items-center gap-2 w-full">
                    <p className="text-[14px] font-[500]">{email.name}</p>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className="text-[10px] font-[400] text-[#71717a]">
                          {formatRelativeDate(email.createdAt)}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>{formatDate(email.createdAt)}</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-[12px] font-[500]">{email.subject}</p>
                  {/* #71717a */}
                  <p className="text-[12px] font-[500] text-[#71717a] text-start mt-2 line-clamp-2">
                    {email.message}
                  </p>
                </Card>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default EmailList;
