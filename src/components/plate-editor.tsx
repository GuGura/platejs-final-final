'use client'
import {Editor} from "@/components/plate-ui/editor";
import {Plate} from "@udecode/plate";
import {DndProvider} from "react-dnd";
import {plugins} from "@/lib/plate/plate-plugins";
import {HTML5Backend} from "react-dnd-html5-backend";
import {MentionCombobox} from "@/components/plate-ui/mention-combobox";
import {MENTIONABLES} from "@/lib/plate/mentionables";

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
export default function PlateEditor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate initialValue={initialValue} plugins={plugins}>
        <Editor className="px-[96px] py-16"
                autoFocus
                focusRing={false}
                variant="ghost"
                size="md"/>
        <MentionCombobox items={MENTIONABLES}/>
      </Plate>
    </DndProvider>
  )
}
