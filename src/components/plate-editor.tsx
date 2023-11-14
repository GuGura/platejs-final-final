'use client'
import {Editor} from "@/components/plate-ui/editor";
import {Plate} from "@udecode/plate";
import {DndProvider} from "react-dnd";
import {plugins} from "@/lib/plate/plate-plugins";
import {HTML5Backend} from "react-dnd-html5-backend";
import {MentionCombobox} from "@/components/plate-ui/mention-combobox";
import {MENTIONABLES} from "@/lib/plate/mentionables";
import {FloatingToolbar} from "@/components/plate-ui/floating-toolbar";
import {FloatingToolbarButtons} from "@/components/plate-ui/floating-toolbar-buttons";

const initialValue = [
  {
    type: 'p',
    children: [
      {
        text: 'This is editable plain text with react and history plugins, just like a <textarea>!',
      },
    ],
  },
];
type PlateEditorProps = {
  type?: 'comment' | 'post'
  readonly?: boolean
}
export default function PlateEditor({type = 'post', readonly = false}: PlateEditorProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate initialValue={initialValue} plugins={plugins}>
        <Editor
          className="px-10 py-5"
          autoFocus
          focusRing={false}
          variant="ghost"
          size="md"/>
        <FloatingToolbar>
          <FloatingToolbarButtons/>
        </FloatingToolbar>
        <MentionCombobox items={MENTIONABLES}/>
      </Plate>
    </DndProvider>
  )
}
