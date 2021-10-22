import _ from "lodash";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css";

interface PagnitationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  // pagesCount: number;
  onPaginate: (event: any, value: React.SetStateAction<number>) => void;
}

export const Pagnitation: React.FC<PagnitationProps> = ({
  totalCount,
  pageSize = 9,
  currentPage,
  // pagesCount = 1,
  onPaginate,
}) => {
  const pagesCount = Math.ceil(totalCount / pageSize);

  return (
    <>
      {totalCount != 0 && (
        <Stack spacing={2}>
          <Typography>Page: {currentPage}</Typography>
          <Pagination
            count={pagesCount}
            page={currentPage}
            onChange={onPaginate}
          />
        </Stack>
      )}
    </>
  );
};

export default Pagnitation;
