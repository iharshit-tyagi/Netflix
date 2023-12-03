import { ORIGNAL_IMG_BASE_URL } from "../utils/constants";
const MovieCard = ({ title, posterUrl }) => {
  return (
    <div>
      {/* <h2>{title}</h2> */}
      <img src={ORIGNAL_IMG_BASE_URL + posterUrl} alt="movie-poster" />
    </div>
  );
};
export default MovieCard;
