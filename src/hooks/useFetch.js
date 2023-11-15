import { useState, useEffect } from "react";
import axios from "axios";

const gists = axios.create({
  baseURL: "https://zapier-frontend-test-app.vercel.zapier-deployment.com/api/github/",
});

const useFetch = () => {
  const [data, setData] = useState({
    userId: "",
    results: [],
  });

  useEffect(() => {
    if (data.userId !== "") {
      const timeout = setTimeout(() => {
        const fetchData = async () => {
          try {
            const response = await gists.get(`users/${data.userId}/gists`);
            setData({ ...data, results: response.data });
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [data, data.userId]);


  return { data, setData };
};

export default useFetch;
