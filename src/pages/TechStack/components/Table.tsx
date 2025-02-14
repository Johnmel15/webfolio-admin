import { Pencil, Plus, Trash } from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import { FC } from "react";
import { useTechStack } from "../../../states";

interface TechStackProps {
  data: any[];
  isLoading: boolean;
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
  handleEdit: (id: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Table: FC<TechStackProps> = (props) => {
  const {
    setIsModalOpen,
    handleEdit,
    data,
    isLoading,
    searchTerm,
    setSearchTerm,
  } = props;

  const setIsDeleteVisible = useTechStack((state) => state.setIsDeleteVisible);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[100%]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center w-full">
          <div className="flex items-center gap-2 w-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 bg-purple-600 text-white text-[12px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium rounded-md hover:bg-purple-700 transition gap-2"
            >
              <Plus className="w-[18px] " />
              Add
            </button>
            <div className="flex flex-col justify-center">
              <h2 className="text-[11px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold text-gray-800 text-left">
                Tech Stack
              </h2>
              <p className="text-[10px] lg:text-[16px] md:text-[9px] sm:text-[12px] text-start text-gray-500">
                A list of all the tech stack I used throughout my career.
              </p>
            </div>
          </div>
          <div className="flex justify-end w-full ">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Tech Stack..."
              className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="border-b text-gray-600 text-left text-sm font-medium">
              <th className="px-4 py-2">Icon</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Icon Color</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {!isLoading &&
              data.map((item, index) => {
                const IconComponent =
                  FaIcons[item.icon as keyof typeof FaIcons] ||
                  SiIcons[item.icon as keyof typeof SiIcons] ||
                  AiIcons[item.icon as keyof typeof AiIcons] ||
                  RiIcons[item.icon as keyof typeof RiIcons] ||
                  BiIcons[item.icon as keyof typeof BiIcons];

                const categoryPallete =
                  item.category?.toUpperCase() === "FRONTEND"
                    ? `bg-green-700`
                    : ` bg-blue-700`;

                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="px-4 py-3 text-gray-800 text-left text-[20px]">
                      {IconComponent ? (
                        <IconComponent
                          color={`#${item.icon_color}`}
                          size={24}
                        />
                      ) : (
                        "❌"
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-left text-[12px]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-left text-[10px]">
                      <div
                        className={`flex items-center text-white px-2 w-fit h-5 rounded-lg ${categoryPallete}`}
                      >
                        {item.category?.toUpperCase()}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-left text-[12px]">
                      <div className="flex gap-2 items-center">
                        <div
                          style={{ backgroundColor: `#${item.icon_color}` }}
                          className={`w-fit px-2 py-2 rounded-sm`}
                        ></div>
                        #{item.icon_color}
                      </div>
                    </td>
                    <td className="px-4 py-3 flex justify-end gap-2">
                      <button
                        className="flex items-center bg-purple-600 text-[12px] text-white px-4 py-1 rounded-md font-medium gap-1"
                        onClick={() => handleEdit(item._id)}
                      >
                        <Pencil className="w-[14px]" />
                        Edit
                      </button>
                      <button
                        className="flex items-center bg-red-600 text-[12px] text-white px-4 py-1 rounded-md font-medium gap-1"
                        onClick={() => setIsDeleteVisible(true)}
                      >
                        <Trash className="w-[14px]" />
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
