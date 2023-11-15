import {request} from "@/api/axios";

export async function getPost(id?: string) {
  if (!id) return null;
  return await request({
    url: "/plate/post",
    method: "GET",
    params: {
      id,
    }
  });
}
export async function SavePost(value:any) {
  return await request({
    url: "/plate/post",
    method: "POST",
    data: {
      value
    }
  });
}
