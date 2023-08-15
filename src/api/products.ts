
export async function getProducts() {
  try {
    const url = "https://www.servicesdogschool.com/api/products";
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};