import cors from "@koa/cors";
import Router from "@koa/router";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { RegisterRoutes } from "../routes/routes";
import { logger } from "./utils/logger";

const startServer = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const app = new Koa();
			app.use(bodyParser());
			app.use(cors());

			const router = new Router();
			RegisterRoutes(router);
			app.use(router.routes());

			app.listen(3000, () => {
				logger.info(`Server running on port 3000 🚀🚀🚀`);
				resolve();
			});
		} catch (error) {
			reject(error);
		}
	});
};

startServer().catch((error) =>
	logger.error("Error starting server => ", error)
);
