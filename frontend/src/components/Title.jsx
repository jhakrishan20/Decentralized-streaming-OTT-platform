import "../css/landingpage.css";
import Button from "./Button";

export default function Title() {
  return (
    <div className="container-0">
      <div className="box-0">
        <p>The Best Streaming Experience</p>
      </div>
      <div className="box-1">
        <p>Now only at ₹99/-</p>
      </div>
      <div className="box-2">
        <Button
          text="Start Watching Now"
          color="#00A3FF"
          border=""
          type="video"
          align="no"
        />
      </div>
    </div>
  );
}
