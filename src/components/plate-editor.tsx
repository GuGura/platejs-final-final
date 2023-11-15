'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Plate} from '@udecode/plate-common';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import {MENTIONABLES} from '@/lib/plate/mentionables';
import {plugins} from '@/lib/plate/plate-plugins';
import {cn} from '@/lib/utils';
import {CursorOverlay} from '@/components/plate-ui/cursor-overlay';
import {Editor} from '@/components/plate-ui/editor';
import {FixedToolbar} from '@/components/plate-ui/fixed-toolbar';
import {FixedToolbarButtons} from '@/components/plate-ui/fixed-toolbar-buttons';
import {FloatingToolbar} from '@/components/plate-ui/floating-toolbar';
import {FloatingToolbarButtons} from '@/components/plate-ui/floating-toolbar-buttons';
import {MentionCombobox} from '@/components/plate-ui/mention-combobox';
import {usePlateStore} from "@/store/plate-store";
import {ELEMENT_PARAGRAPH} from "@udecode/plate-paragraph";


interface Operation {
  type: string;
  // other properties...
}

const initialValue = [
  {
    id: '1',
    type: ELEMENT_PARAGRAPH, // Assuming ELEMENT_PARAGRAPH is a string constant or variable
    children: [{text: 'A line of text in a paragraph.'}],
  },
]
export default function PlateEditor() {
  const containerRef = useRef(null);
  const [value, setValue] = usePlateStore(state => [state.value, state.setValue])
  const [plateValue, setPlateValue] = useState(()=>value)
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        plugins={plugins}
        initialValue={value}
        onChange={value =>
          setValue(value)
        }>
        <div
          ref={containerRef}
          className={cn(
            // Block selection
            '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4'
          )}
        >
          <FixedToolbar>
            <FixedToolbarButtons/>
          </FixedToolbar>

          <Editor
            className="px-[96px] py-16"
            autoFocus
            focusRing={false}
            variant="ghost"
            size="md"
          />

          <FloatingToolbar>
            <FloatingToolbarButtons/>
          </FloatingToolbar>

          <MentionCombobox items={MENTIONABLES}/>

          <CursorOverlay containerRef={containerRef}/>
        </div>
      </Plate>
    </DndProvider>
  );
}
