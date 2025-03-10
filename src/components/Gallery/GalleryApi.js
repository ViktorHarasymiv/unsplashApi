import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY = "8vI5PWdhQn1A7V0S-cGvMNlkyL1NemqG3r094b3bK9c";

export const fetchArticlesWithTopic = async (SEARCH_VALUE, nextLoad) => {
  
  const params = {
    query: SEARCH_VALUE,
    page: nextLoad,
    per_page: 14,
    client_id: KEY
}

   const response = await axios.get(`search/photos/?${new URLSearchParams(params).toString()}`);
   return response.data;
  }