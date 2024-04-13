import "../css/about.css";
export default function About({ children }) {
  return (
    <div className="main-form-body">
    <div className="head">
    <h2>ABOUT US</h2>
    </div>
      <div className="child">{children}</div>
    </div>
  );
}
