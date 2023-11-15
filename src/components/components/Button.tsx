'use client';
import {usePlateStore} from "@/store/plate-store";

export default function ButtonSave(){
  const [requestPost] = usePlateStore(state => [state.requestPost])
  return (
    <button className={'px-4 py-1 border border-gray-300 rounded mt-3'}
            onClick={requestPost}
    >Save</button>
    )
}
