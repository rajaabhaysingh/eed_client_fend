// netRating
// returns net rating
const netRating = (ratings) => {
  const totalRatings =
    ratings.oneStar +
    ratings.twoStar +
    ratings.threeStar +
    ratings.fourStar +
    ratings.fiveStar;

  const finalRating =
    (ratings.oneStar +
      2 * ratings.twoStar +
      3 * ratings.threeStar +
      4 * ratings.fourStar +
      5 * ratings.fiveStar) /
    totalRatings;

  if (totalRatings > 0) {
    return finalRating;
  } else {
    return "N/A";
  }
};

export default netRating;
