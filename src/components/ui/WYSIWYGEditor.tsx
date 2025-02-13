import React, { useEffect } from "react";
import { Editor, ContentEditableEvent, EditorProvider, Toolbar, BtnBold, BtnItalic, createButton } from "react-simple-wysiwyg";

interface WYSIWYGEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const WYSIWYGEditor: React.FC<WYSIWYGEditorProps> = ({ value, onChange }) => {
  const handleChange = (event: ContentEditableEvent) => {
    onChange(event.target.value); // Corrected event type
  };

  const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');
  const BtnAlignLeft = createButton('Align left', '≡', 'justifyLeft');
  const BtnAlignRight = createButton('Align right', '≡', 'justifyRight');

  useEffect(() => { document.execCommand("justifyLeft", false); }, []);

  return (
    <div className="border rounded-lg p-2 w-full">
      <EditorProvider>
        <Editor value={value} onChange={handleChange} style={{ textAlign: "left"}}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnAlignLeft />
            <BtnAlignCenter />
            <BtnAlignRight />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default WYSIWYGEditor;
