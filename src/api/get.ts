import { API_URL } from "../constants/api";

export async function getData(endpoint: string) {
  try {
    const url = `${API_URL}/${endpoint}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
