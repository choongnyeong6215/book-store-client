import { setupWorker } from "msw/browser";
import { addReview, reviewsById, revivewForMain } from "./review";
import { bestBooks } from "./books";

const handlers = [reviewsById, addReview, revivewForMain, bestBooks];

export const worker = setupWorker(...handlers);
