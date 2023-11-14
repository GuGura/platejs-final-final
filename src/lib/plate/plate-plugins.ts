import {createPlugins} from "@udecode/plate";

/* Drag
*  - draggable.tsx
*  - with-draggables.tsx
*  - tooltip.tsx
* */
import {createNodeIdPlugin} from '@udecode/plate-node-id';
import {createDndPlugin} from '@udecode/plate-dnd';
import {withDraggables} from "@/components/plate-ui/with-draggables";

/* Mention
*  - combobox.tsx
*  - mention-combobox.tsx
*  - mention-element.tsx
*  - mention-input-element.tsx
*  - mentionables.ts
* */
import {createComboboxPlugin} from '@udecode/plate-combobox';
import {createMentionPlugin, ELEMENT_MENTION, ELEMENT_MENTION_INPUT} from '@udecode/plate-mention';
import {MentionElement} from "@/components/plate-ui/mention-element";
import {MentionInputElement} from "@/components/plate-ui/mention-input-element";

export const plugins = createPlugins([
  // ...otherPlugins,
  createNodeIdPlugin(),
  createDndPlugin(),

  /* Mention */
  createComboboxPlugin(),
  createMentionPlugin(),
], {
  components: withDraggables({

    /* Mention */
    [ELEMENT_MENTION]: MentionElement,
    [ELEMENT_MENTION_INPUT]: MentionInputElement,
  })
});
