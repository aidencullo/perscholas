import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Component (props) {
  // Our api key from some third-party API.
  const apiKey = "YOUR API KEY";
  const url = `http://some.api.com/api/getData?apikey=${apiKey}`;

  // State to hold the data.
  const [data, setData] = useState("null");

  // Function to fetch data.
  const getData = async () => {
    try {
      const response = await fetch(url);
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
      <div>
        <h1>{data.somefield}</h1>
        <h2>{data.someOtherField}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If data exists, run the loaded function; otherwise, run loading.
  return data ? loaded() : loading();
}
