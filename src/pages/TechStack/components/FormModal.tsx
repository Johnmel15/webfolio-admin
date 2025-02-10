import { FC, useMemo, useState } from "react";
import { ModalProps } from "../../../types/modal";
import { X } from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";

const allIcons = { ...FaIcons, ...AiIcons, ...RiIcons, ...BiIcons, ...SiIcons } as Record<string, IconType>;

const FormModal: FC<ModalProps> = ({ setIsModalOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<{ icon: string; name: string; category: string; icon_color: string }>({
    icon: "", // Default icon as string
    name: "",
    category: "",
    icon_color: "",
  });

  const iconList = useMemo(() => {
    return Object.keys(allIcons).filter((icon) =>
      icon.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm])

  const SelectedIcon = allIcons[formData.icon as keyof typeof allIcons];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Tech Stack</h2>
          <button onClick={() => setIsModalOpen(false)}>
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <form>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 text-left">Select Icon</label>
            <div className="flex items-center relative mt-1 border-[1px] border-black rounded-md gap-2 px-2 py-1">
              {SelectedIcon && <SelectedIcon className="w-5 h-5"/>}
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 p-2"
                placeholder="Search Icon"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(false)}
              />
              
            </div>
            {isDropdownOpen && (
                <div className="absolute z-10 bg-white border rounded-md shadow-lg mt-1 w-full max-h-40 overflow-y-auto">
                  {iconList.map((icon) => (
                    <div
                      key={icon}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setFormData({ ...formData, icon });
                        setSearchTerm(icon);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {allIcons[icon as keyof typeof allIcons] &&
                        allIcons[icon as keyof typeof allIcons]({ className: "w-5 h-5" })}
                      <span>{icon}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">Name</label>
            <input type="text" className="mt-1 block w-full border-[1px] border-black rounded-md  focus:ring-purple-500 focus:border-purple-500 p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">Category</label>
            <input type="text" className="mt-1 block w-full border-[1px] border-black rounded-md  focus:ring-purple-500 focus:border-purple-500 p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">Icon Color</label>
            <input type="text" className="mt-1 block w-full border-[1px] border-black rounded-md  focus:ring-purple-500 focus:border-purple-500 p-2" placeholder="#61DAFB" />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
            Add Tech Stack
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
