import { FC, Fragment, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetAllEmailsQuery } from "@/hooks/queries";
import { useEmail } from "@/states";
import { formatDate, formatRelativeDate } from "@/utils/helper";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useContactMutation } from "@/hooks/mutations";
import { RefreshCw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const EmailList: FC = () => {
  const cache = useQueryClient();
  const handleEmail = useEmail((state) => state.handleEmail);
  const isSelected = useEmail((state) => state.isSelected);
  const setIsSelected = useEmail((state) => state.setIsSelected);

  const [filter, setFilter] = useState<"all" | "unread">("all");

  const { readEmail } = useContactMutation();
  const { dataEmail, loadingEmail } = useGetAllEmailsQuery({
    search: "",
    unread: filter === "unread",
    archived: false,
  });

  const handleRead = async (emailId: string) => {
    const response = await readEmail({ isRead: true }, emailId);

    if (response.code === 200) {
      cache.invalidateQueries({ queryKey: ["email_list"] });
    }
  };

  return (
    <div className="w-full md:w-1/3 border-r p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <div className="flex gap-2 items-center">
          <Tooltip>
            <TooltipTrigger>
              <p className="text-[10px] font-[400] text-black">
                <RefreshCw className="h-4 w-4 cursor-pointer" onClick={() => cache.invalidateQueries({ queryKey: ["email_list"] })}/>
              </p>
            </TooltipTrigger>
            <TooltipContent>Refresh</TooltipContent>
          </Tooltip>
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={(val) => val && setFilter(val as "all" | "unread")}
            className="bg-muted p-1 rounded-xl"
          >
            <ToggleGroupItem
              value="all"
              className="px-4 py-2 text-sm font-medium data-[state=on]:bg-white data-[state=on]:shadow-sm rounded-lg"
            >
              All mail
            </ToggleGroupItem>
            <ToggleGroupItem
              value="unread"
              className="px-4 py-2 text-sm font-medium data-[state=on]:bg-white data-[state=on]:shadow-sm rounded-lg"
            >
              Unread
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="w-full mt-2 p-2 border rounded-md"
      />
      <div className="mt-4 space-y-2 overflow-y-auto h-[65vh]">
        {!loadingEmail ? (
          <>
            {dataEmail.map((email: any, idx: number) => (
              <Fragment key={idx}>
                <Card
                  className={`group flex flex-col items-start p-4 hover:bg-gray-100 cursor-pointer ${
                    isSelected === email._id ? "bg-gray-100 border-black" : ""
                  }`}
                  onClick={() => {
                    setIsSelected(email._id);
                    handleEmail(
                      String(email._id),
                      email.name,
                      email.subject,
                      email.createdAt,
                      email.message,
                      email.email
                    );
                    handleRead(email._id);
                  }}
                >
                  <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-[500]">{email.name}</p>
                      {!email.isRead && (
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                      )}
                    </div>

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
          </>
        ) : (
          <div className="space-y-2">
            <Skeleton className="h-[120px] w-[-webkit-fill-available] rounded-xl" />
            <Skeleton className="h-[120px] w-[-webkit-fill-available] rounded-xl" />
            <Skeleton className="h-[120px] w-[-webkit-fill-available] rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailList;
