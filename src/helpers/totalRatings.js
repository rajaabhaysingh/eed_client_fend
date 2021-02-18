// totalRating
// returns rating counts
const totalRating = (ratings) => {
  return (
    ratings.oneStar +
    ratings.twoStar +
    ratings.threeStar +
    ratings.fourStar +
    ratings.fiveStar
  );
};

export default totalRating;
