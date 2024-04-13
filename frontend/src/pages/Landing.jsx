import About from "../components/About";
import Faqs from "../components/Faqs";
import FreeTrial from "../components/FreeTrial";
import Plans from "../components/Plans";
import Title from "../components/Title";

export default function Landing() {
  return (
    <div>
      <Title />
      <About>
      "WEBSITE NAME" is an online video streaming 
      platform which offers a variety of movies, 
      TV shows, Web-series of different genres and
       languages. You can also experience movie 
       streaming in Full HD quality, without ads 
       and with many more benefits by purchasing 
       our premium plans. "WEBSITE NAME" offers a
      user friendly interface which supports many
       languages and  regional cinemas.
      </About>
      <Faqs />
      <Plans />
      <FreeTrial />
    </div>
  );
}
