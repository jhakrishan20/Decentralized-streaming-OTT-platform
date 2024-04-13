import Card from "./Card";
import "../css/card.css";

export default function Plans() {
  return (
    <div className="Plan-main-heading">
      <div className="plan-heading"><h3>CHOOSE YOUR PLAN</h3></div>
      <div className="plan-sub-heading"><p>
        Join *** and select from our flexible subscription options tailored to
        suit your viewing preferences. Get ready for non-stop entertainment!
      </p></div>
      <div className="card-plann">
        <div><Card type="plan" heading="Basic Plan" price={99} time="day">
          Enjoy an extensive library of movies and shows, featuring a range of
          content, including recently released titles.
        </Card></div>
        <div><Card type="plan" heading="Standard Plan" price={199} time="month">
          Access to a wider selection of movies and shows, including most new
          releases and exclusive content{" "}
        </Card></div>
        <div><Card type="plan" heading="Premium Plan" price={1199} time="year">
          Access to a widest selection of movies and shows, including all new
          releases and Offline Viewing{" "}
        </Card></div>
      </div>
    </div>
  );
}
