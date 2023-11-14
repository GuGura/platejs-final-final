'use client'
import {Editor} from "@/components/plate-ui/editor";
import {Plate} from "@udecode/plate";
import {DndProvider} from "react-dnd";
import {plugins} from "@/lib/plate/plate-plugins";
import {HTML5Backend} from "react-dnd-html5-backend";

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
        <Editor/>
      </Plate>
    </DndProvider>
  )
}
