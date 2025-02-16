import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const emails = [
  {
    id: 1,
    name: "William Smith",
    subject: "Meeting Tomorrow",
    message:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share...",
    time: "over 1 year ago",
    tags: ["meeting", "work", "important"],
  },
  {
    id: 2,
    name: "Alice Smith",
    subject: "Re: Project Update",
    message:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive...",
    time: "over 1 year ago",
    tags: ["work", "important"],
  },
];

export default function EmailDashboard() {
  const [selectedEmail, setSelectedEmail] = useState(emails[0]);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen border">
      {/* Sidebar - Email List */}
      <div className="w-full md:w-1/3 border-r p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold">Inbox</h2>
        <input
          type="text"
          placeholder="Search"
          className="w-full mt-2 p-2 border rounded-md"
        />
        <div className="mt-4 space-y-2">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`p-3 border rounded-md cursor-pointer hover:bg-gray-100 ${
                selectedEmail?.id === email.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedEmail(email)}
            >
              <div className="flex justify-between text-sm font-medium">
                <span>{email.name}</span>
                <span className="text-gray-500">{email.time}</span>
              </div>
              <p className="text-sm font-semibold">{email.subject}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{email.message}</p>
              <div className="mt-1 flex space-x-2 text-xs">
                {email.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Email Content */}
      <div className="w-full md:w-2/3 p-4 flex flex-col">
        {selectedEmail ? (
          <>
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-lg font-semibold">{selectedEmail.name}</h3>
              <button className="text-gray-500 hover:text-red-500">
                <Trash2 size={18} />
              </button>
            </div>
            <div className="text-gray-700 mt-2">
              <p className="text-sm font-semibold">{selectedEmail.subject}</p>
              <p className="text-xs text-gray-500">Reply-To: example@example.com</p>
              <p className="mt-4 text-sm leading-relaxed">{selectedEmail.message}</p>
            </div>
            <div className="mt-auto border-t pt-2">
              <Textarea
                className="text-sm"
                placeholder={`Reply to ${selectedEmail.name}...`}
              />
              <div className="flex justify-end mt-2">
                <Button>Send</Button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Select an email to view.</p>
        )}
      </div>
    </div>
  );
}
