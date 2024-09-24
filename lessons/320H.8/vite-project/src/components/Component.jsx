import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Component (props) {
  // Our api key from some third-party API.
  const url = `https://jsonplaceholder.typicode.com/todos/1`;

  // State to hold the data.
  const [data, setData] = useState("null");

  // Function to fetch data.
  const getData = async () => {
    try {
      const response = await fetch(url);
      console.log(response)
      const data = await response.json();
      setData(data);
    } catch(e) {
      console.error(e)
    }
  };

  // useEffect to run getData when component mounts.
  useEffect(() => {
    getData();
  }, []);

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If data exists, run the loaded function; otherwise, run loading.
  return data ? loaded() : loading();
}
