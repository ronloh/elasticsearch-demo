import * as Koa from "koa";
import * as KoaRouter from "koa-router";
import { logger } from "mol-lib-common/debugging/logging/LoggerV2";
import { KoaResponseHandler } from "mol-lib-common/network/router/KoaResponseHandler";
import { config } from "./config/app-config";
import { RegisterRoutes } from "./routes";

export async function startServer() {

	const router = new KoaRouter();
	RegisterRoutes(router);
	const HandledRoutes = new KoaResponseHandler(router.routes());
	// Setup server
	const koaServer = new Koa()
		.use(HandledRoutes.build())
		.use(router.allowedMethods());

	return new Promise((resolve) => {
		const server = koaServer.listen(config.port, async () => {
			logger.info(`${config.name} v${config.version} started on port ${config.port}`);
			resolve(server);
		});
	});
}