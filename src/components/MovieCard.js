import { ORIGNAL_IMG_BASE_URL } from "../utils/constants";
const MovieCard = ({ posterUrl }) => {
  return (
    <div className="">
      <img
        className="rounder-md"
        src={ORIGNAL_IMG_BASE_URL + posterUrl}
        alt="movie-poster"
      />
    </div>
  );
};
export default MovieCard;
