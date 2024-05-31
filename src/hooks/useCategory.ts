import { useEffect, useState } from "react";
import { ICategory } from "../models/caetgory.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";
import { QUERYSTRING } from "../constants/querystring";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<ICategory[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);

    if (params.get(QUERYSTRING.CATEGORY_ID)) {
      setCategory((prevCategory) => {
        return prevCategory.map((item) => {
          return {
            ...item,
            isActive:
              item.category_id === Number(params.get(QUERYSTRING.CATEGORY_ID)),
          };
        });
      });
    } else {
      setCategory((prevCategory) => {
        return prevCategory.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      const categoryWithAll = [
        {
          category_id: null,
          category_name: "전체",
        },
        ...category,
      ];
      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};
