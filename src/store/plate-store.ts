import {create} from 'zustand'
import {SavePost} from "@/api/client/plateService";
import {ELEMENT_PARAGRAPH} from "@udecode/plate-paragraph";

type State = {
  value: any ;
};

type Action = {
  setValue: (value: any) => void;
  requestPost: (value: any) => Promise<void>;
  redirect: (value: boolean) => void;
  reset: () => void;
};

const initialState: State = {
  value: [
    {
      id: '1',
      type: ELEMENT_PARAGRAPH, // Assuming ELEMENT_PARAGRAPH is a string constant or variable
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ],
};

export interface PlateSlice extends State, Action {}

export const usePlateStore = create<PlateSlice>((set, get) => ({
  value: initialState.value, // Add the 'value' property to PlateSlice
  setValue: (value) =>{
    set(() => ({ value: value }))
  },
  requestPost: async () =>{
    console.log(get().value)
    const res = await SavePost(get().value)
    get().redirect(res.status < 400);
  },
  redirect: (value) =>{
    if (value) {
      window.location.href = "/"
    }
  },
  reset: () => set(initialState),
}));
