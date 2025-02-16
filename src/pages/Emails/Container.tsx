import { Content, DeleteEmailModal, EmailList } from "./components";

export default function EmailDashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full h-[80vh] border ">
      {/* Sidebar - Email List */}
      <DeleteEmailModal/>
      <EmailList />
      {/* Email Content */}
      <Content />
    </div>
  );
}
