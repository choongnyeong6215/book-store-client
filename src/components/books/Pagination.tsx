import styled from "styled-components";
import { IPagination } from "../../models/pagination.model";
import Button from "../common/Button";
import { LIMIT } from "../../constants/pagination";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

interface IPaginationProps {
  pagination: IPagination;
}

const Pagination = ({ pagination }: IPaginationProps) => {
  const [searchParmas, setSearchParams] = useSearchParams();
  const { current_page, total_count } = pagination;
  const pages = Math.ceil(total_count / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParmas = new URLSearchParams(searchParmas);

    newSearchParmas.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParmas);
  };

  return (
    <PaginationStyle>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <Button
                  size="small"
                  schema={index + 1 === current_page ? "primary" : "normal"}
                  onClick={() => handleClickPage(index + 1)}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
        </ol>
      )}
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px;

  ol {
    display: flex;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default Pagination;
