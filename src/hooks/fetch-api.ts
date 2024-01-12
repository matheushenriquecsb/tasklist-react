import axios from "axios";

const url = "http://localhost:3000/tasks";

export const getData = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const createData = async (inputValue: string) => {
  const newData = await axios.post(url, { name: inputValue });
  return newData;
};

export const deleteData = async (id: string) => {
  await axios.delete(`${url}/${id}`);
};

export const editData = async (id: number, name: string) => {
  await axios.put(url, { id, name });
};

export const modifyStatus = async (id: string, status: boolean) => {
  await axios.put(url, { id, status });
};
