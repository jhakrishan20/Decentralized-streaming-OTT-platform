import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";

export default function MoviePlay({ name, description }) {
  const [result, setResult] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=fa3ff5d2"
      );
      console.log(res.data);
      setResult(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>{result.Title}</h2>

      <p>{result.Plot}</p>

      <img src={result.Poster} alt={result.Title} />

      <Button text="Play Now" color="blue" type="video" />
      <Button text="+" color="black" border="" />
      <Button text="👍🏾" color="black" border="" />
      <Button text="🔊" color="black" border="" />
    </div>
  );
}
