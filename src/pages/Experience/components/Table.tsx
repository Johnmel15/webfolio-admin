import { Pencil, Plus } from "lucide-react";
import { FC } from "react";

const Table: FC = () => {
  const users = [
    {
      company_name: "ABC Technologies",
      position: "Front-end Developer",
      date_start_date_end: "Aug 2020 - Sep 2021",
      status: "Past",
      tech_stacks: ["React.js", "Typescript"],
      responsibilities: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[100%]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 text-left">
            Experience
          </h2>
          <p className="text-sm text-gray-500">
            A list of all of my work experiences throughout my career.
          </p>
        </div>
        <button
          // onClick={() => setIsModalOpen(true)}
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
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Date Start - Date End</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Tech Stack</th>
              <th className="px-4 py-2">Key Responsibilities</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100 transition">
                <td className="px-4 py-3 text-gray-800 text-left text-[11px]">
                  {user.company_name}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  {user.position}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  {user.date_start_date_end}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  <div className="border-[1px] bg-red-200 border-red-500 w-fit px-3 rounded-xl text-red-900 font-bold">
                    {user.status?.toUpperCase()}
                  </div>
                </td>
                <td className="text-[11px]">
                  <div className="flex gap-1">
                    {user.tech_stacks?.map((tech, idx) => (
                      <div
                        key={idx}
                        className="border-[1px] bg-blue-200 border-blue-500 w-fit px-3 rounded-xl text-blue-900 font-bold"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  {user.responsibilities}
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
