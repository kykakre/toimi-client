import axios from "axios";

export const PostForm = async (data) => {
  const response = await axios.post("api/form", data);
  return response.data.ResponseData;
};
