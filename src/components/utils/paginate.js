import _ from "lodash";

export function paginate(allMovies, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(allMovies).slice(startIndex).take(pageSize).value();
}
