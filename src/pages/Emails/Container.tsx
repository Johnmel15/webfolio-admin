import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Content, EmailList } from "./components";

export default function EmailDashboard() {

  return (
    <div className="flex flex-col md:flex-row w-full h-[80vh] border ">
      {/* Sidebar - Email List */}
      <EmailList />
      
      {/* Email Content */}
      <Content/>
    </div>
  );
}
