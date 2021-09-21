import { useEffect, useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState([]);

  const fetchUnit = async () => {
    const response = await fetch("https://reactnative.dev/movies.json");
    const data = await response.json();
    setData(data.movies);
  };

  useEffect(() => {
    fetchUnit();
  }, []);

  console.log(data);
  return (
    <div>
      <p>data fetching</p>
      {data.map((item) => {
        return <div>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
};
