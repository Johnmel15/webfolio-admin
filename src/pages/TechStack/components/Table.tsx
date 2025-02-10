import { Pencil, Plus } from "lucide-react";
import { FC } from "react";
import { SiReact } from "react-icons/si";
import { ModalProps } from "../../../types/modal";

const Table: FC<ModalProps> = (props) => {
  const { setIsModalOpen } = props;
  const users = [
    {
      icon: <SiReact className="text-[#61DAFB]" />,
      name: "React.js",
      category: "Frontend",
      icon_color: "61DAFB",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[100%]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 text-left">
            Tech Stack
          </h2>
          <p className="text-sm text-gray-500">
            A list of all the tech stack I used throughout my career.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition gap-2"
        >
          <Plus className="w-[18px]" />
          Add Tech Stack
        </button>
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
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100 transition">
                <td className="px-4 py-3 text-gray-800 text-left text-[20px]">
                  {user.icon}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[12px]">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[12px]">
                  {user.category}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[12px]">
                  <div
                    className={`bg-[#${user.icon_color}] w-fit px-2 py-1 rounded-md`}
                  >
                    #{user.icon_color}
                  </div>
                </td>
                <td className="px-4 py-3 flex justify-end">
                  <button className="flex items-center bg-purple-600 text-[14px] text-white px-4 py-2 rounded-md font-medium gap-2">
                    <Pencil className="w-[18px]" />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
