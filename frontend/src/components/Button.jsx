import { FaPlay } from "react-icons/fa";
export default function Button({ text, color, border, type = "noVideo" }) {
  return (
    <button
      style={{
        border: border,
        cursor: "pointer",
        backgroundColor: color,
        color: "white",
        padding: "10px 10px",
        borderRadius: "5px",
        marginInlineEnd: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <div >{type == "video" ? <FaPlay /> : null} </div>
      <div>{text}</div>
    </button>
  );
}
