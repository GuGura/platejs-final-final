import { createDndPlugin } from '@udecode/plate-dnd';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import {createPlugins} from "@udecode/plate";
import {withDraggables} from "@/components/plate-ui/with-draggables";

export const plugins = createPlugins([
  // ...otherPlugins,
  createNodeIdPlugin(),
  createDndPlugin(),
],{
  components:withDraggables({

  })
});
