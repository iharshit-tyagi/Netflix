import { ORIGNAL_IMG_BASE_URL } from "../utils/constants";
const MovieCard = ({ posterUrl }) => {
  if (!posterUrl) return;
  return (
    <div className="md:m-2 m-1 rounded-lg">
      <img
        className="rounder-md w-40 md:w-60"
        src={ORIGNAL_IMG_BASE_URL + posterUrl}
        alt="movie-poster"
      />
    </div>
  );
};
export default MovieCard;
