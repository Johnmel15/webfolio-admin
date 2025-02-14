import { FC, useState } from "react";

const Container: FC = () => {
  const [content, setContent] = useState("");
  return (
    <div className="flex flex-col items-start">
      {/* <AboutTable /> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h1 className="text-xl font-bold mb-2">About Section</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start">
            <label htmlFor="for-header">Header:</label>
            <input
              type="text"
              id="for-header"
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="for-header">Content:</label>
            <textarea
              className="w-full p-2 border rounded-md"
              style={{ height: "200px" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
