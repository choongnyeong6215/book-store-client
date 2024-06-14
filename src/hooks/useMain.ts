import { fetchBanners } from "@/api/banner.api";
import { fetchBestBooks, fetchBooks } from "@/api/books.api";
import { fetchReviewAll } from "@/api/review.api";
import { IBanner } from "@/models/banner.model";
import { IBook, IBookReviewItem } from "@/models/book.model";
import { useEffect, useState } from "react";

export const useMain = () => {
  const [reviews, setReviews] = useState<IBookReviewItem[]>([]);
  const [newBooks, setNewBooks] = useState<IBook[]>([]);
  const [bestBooks, setBestBooks] = useState<IBook[]>([]);
  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    fetchReviewAll().then((reviews) => {
      setReviews(reviews);
    });

    fetchBooks({
      category_id: undefined,
      recent_books: true,
      current_page: 1,
      limit: 4,
    }).then(({ books }) => {
      setNewBooks(books);
    });

    fetchBestBooks().then((books) => {
      setBestBooks(books);
    });

    fetchBanners().then((bannders) => {
      setBanners(banners);
    });
  }, []);

  return { reviews, newBooks, bestBooks, banners };
};
