import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import React, { useEffect } from "react";
import { Editor, ContentEditableEvent, EditorProvider, Toolbar, BtnBold, BtnItalic, createButton, BtnBulletList, BtnUnderline, BtnNumberedList } from "react-simple-wysiwyg";

interface WYSIWYGEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const WYSIWYGEditor: React.FC<WYSIWYGEditorProps> = ({ value, onChange }) => {
  const handleChange = (event: ContentEditableEvent) => {
    onChange(event.target.value); // Corrected event type
  };

  const BtnAlignCenter = createButton('Align center', <AlignCenter className="w-5 h-5"/>, 'justifyCenter');
  const BtnAlignLeft = createButton('Align left', <AlignLeft className="w-5 h-5"/>, 'justifyLeft');
  const BtnAlignRight = createButton('Align right', <AlignRight className="w-5 h-5"/>, 'justifyRight');

  useEffect(() => { document.execCommand("justifyLeft", false); }, []);

  return (
    <div className="border rounded-lg p-2 w-full">
      <EditorProvider>
        <Editor value={value} onChange={handleChange} style={{ textAlign: "left"}}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline/>
            <BtnBulletList/>
            <BtnNumberedList/>
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
