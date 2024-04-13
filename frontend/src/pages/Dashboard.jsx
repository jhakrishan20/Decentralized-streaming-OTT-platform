import MovieCard from "../components/MovieCard";
import kantara from "../assets/kantara.jpeg";
import MoviePlay from "../components/MoviePlay";

export default function Dashboard() {
  return (
    <div>
      {/* <MovieCard duration="1h 05min" ratings="2.3k" image={kantara} /> */}
      <MoviePlay name="Kantara" description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands." />
    </div>
  );
}
