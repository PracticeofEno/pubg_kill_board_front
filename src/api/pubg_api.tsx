import axios, { type AxiosResponse } from "axios";

export async function getHarthistory(username: string, mode: string) {
  let response;
  response = await axios.get(`/api/bj/hart-history/${username}?mode=${mode}`);
  return response.data;
}

