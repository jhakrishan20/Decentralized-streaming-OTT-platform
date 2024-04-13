import { FaClock } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

export default function MovieCard({ duration, ratings, image }) {
  return (
    <div className="bg-richblack-1000 p-2 w-48 rounded m-5 px-3">
      <img src={image} alt="movie" className="rounded my-1" />
      <div className="flex justify-between mt-2">
        <div className="flex gap-1 items-center my-1 rounded-xl bg-richblack-300 p-1 px-1.5">
          <div>
            <FaClock />
          </div>
          <div>{duration}</div>
        </div>
        <div className="flex gap-1 items-center  my-1 rounded-xl bg-richblack-300 p-1 px-1.5">
          <FaRegEye />
          {ratings}
        </div>
      </div>
    </div>
  );
}
