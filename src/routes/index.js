import Router from "@koa/router";
import { moviesRouter } from "./movies.js";
import { reviewsRouter } from "./reviews.js";

export const router = Router();

router.get("/", async (ctx) => {
  ctx.body = { you: "<- are here !" };
});

router.use("/movies", moviesRouter.routes(), moviesRouter.allowedMethods());
router.use("/reviews", reviewsRouter.routes(), reviewsRouter.allowedMethods());
