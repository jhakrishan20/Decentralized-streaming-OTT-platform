import { useEffect, useState } from "react";
import kantaraFull from "../assets/kantaraFullPage.jpg";
import "../css/movieplay.css";
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
    <div className="main-body">
      <div className="bg-container">
        <div className="Movie-body">
          <div className="movie-head">
            <h2>{name}</h2>
          </div>
          <div className="movie-desc">
            <p>{description}</p>
          </div>

          <div className="movie-icons">
            <Button text="Play Now" color="#00A3FF" type="video" />
            <Button text="+" color="#0F0F0F" border="" />
            <Button text="👍🏾" color="#0F0F0F" border="2px" />
            <Button text="🔊" color="black" border="" />

          </div>
        </div>


      </div>
    </div>
  );
}
