import _ from "lodash";

export const Paginate = (
  items: any,
  pageNumber: number = 0,
  pageSize: number = 0
) => {
  if (items?.length === 0 || pageNumber < 1 || pageSize < 1) {
    return;
  }

  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
};
