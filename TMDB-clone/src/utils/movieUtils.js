export const truncateOverview = (overview, maxLength = 150) => {
  if (overview.length <= maxLength) return overview;
  return overview.substr(0, maxLength).trim() + "...";
};

export const getImageUrl = (path, size = "w500") => {
  if (!path) return "/placeholder-image.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
