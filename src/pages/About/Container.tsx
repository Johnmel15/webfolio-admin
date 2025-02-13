import { FC, useState } from "react";
// import { AboutTable } from "./components";
import WYSIWYGEditor from "../../components/ui/WYSIWYGEditor";

const Container: FC = () => {
  const [content, setContent] = useState("");
  return (
    <div className="flex flex-col items-start">
      {/* <AboutTable /> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h1 className="text-xl font-bold mb-2">React Simple WYSIWYG</h1>
      <WYSIWYGEditor value={content} onChange={setContent} />
      <div className="mt-4 p-2 border">
        <h2 className="text-lg font-semibold">Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
    </div>
  );
};

export default Container;
