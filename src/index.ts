import { createTemplatesAndInitializeIndexes } from "./utils/esUtils";
import { logger } from "./utils/logger";

const startServer = async () => {
	return new Promise(async (resolve, reject) => {
		try {
      await createTemplatesAndInitializeIndexes();
      resolve();
		} catch (error) {
			reject(error);
		}
	});
};

startServer().catch((error) =>
	logger.error("Error => ", error)
);
