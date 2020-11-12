import { Client } from "@elastic/elasticsearch";
import { logger } from "./logger";

let client: Client;

export const getClient = (): Client => {
	if (!client) {
    const esUrlPrefix = "http://elasticsearch:9200";
		client = new Client({node: esUrlPrefix});
		logger.info(`Creating Elasticsearch instance which is running in ${esUrlPrefix}`);
	}
	return client;
};
