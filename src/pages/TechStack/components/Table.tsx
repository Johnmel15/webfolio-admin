import { FC } from "react";

const Table: FC = () => {
  const users = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Courtney Henry",
      title: "Designer",
      email: "courtney.henry@example.com",
      role: "Admin",
    },
    {
      name: "Tom Cook",
      title: "Director of Product",
      email: "tom.cook@example.com",
      role: "Member",
    },
    {
      name: "Whitney Francis",
      title: "Copywriter",
      email: "whitney.francis@example.com",
      role: "Admin",
    },
    {
      name: "Leonard Krasner",
      title: "Senior Designer",
      email: "leonard.krasner@example.com",
      role: "Owner",
    },
    {
      name: "Floyd Miles",
      title: "Principal Designer",
      email: "floyd.miles@example.com",
      role: "Member",
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
        <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition">
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
                <td className="px-4 py-3 text-gray-800 text-left text-[11px]">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  {user.title}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-gray-600 text-left text-[11px]">
                  {user.role}
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-purple-600 hover:underline text-[11px]">
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
