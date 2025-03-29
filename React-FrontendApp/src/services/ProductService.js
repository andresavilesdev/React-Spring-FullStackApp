import axios from "axios";

const baseUrl = "http://localhost:8080/products";

export const findAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const create = async ({ name, price }) => {
  try{

    const response = await axios.post(baseUrl, {
      name,
      price
    });
    return response;
  }catch (error) {
    console.error(error);
  };
}

export const update = async ({ id, name, price }) => {
  try{

    const response = await axios.put(baseUrl + '/' + id, {
      name,
      price
    });
    return response;
  }catch (error) {
    console.error(error);
  };
}

export const remove = async (id) => {
  try{
    await axios.delete(baseUrl + '/' + id);
  }catch (error) {
    console.error(error);
  }
}