import { Client } from "@elastic/elasticsearch";
import { ESTemplate, template } from "../model/esTemplate";
import { getClient } from "./connector";
import { logger } from "./logger";

export const createTemplate = async (templateName: string, template: ESTemplate): Promise<any> => {
	const client: Client = getClient();
	logger.debug(`Template ${templateName} creation for logged_object`, template);
	console.log(client)
// debugger;
// 	return await client.indices.putTemplate({
// 		name: templateName,
// 		body: template,
// 	},
// 	).catch((error) => {
// 		logger.error(`Creation of template: ${templateName} failed`, error.body);
// 		throw new Error(`Creation of template ${templateName} failed. Error: ${error}`);
// 	});
};

export const initializeIndexIfItDoesNotExist = async (index: string) => {
	const client = getClient();
	const response = await client.indices.exists({ index });
	if (!response.body) {
		logger.info(`Initializing index ${index}..`);
		await client.indices
			.create({ index })
			.catch((error) => {
				logger.error(`Initialization of index ${index} failed`, error.body);
				throw new Error(`Initialization of index ${index} failed`);
			});
	}
};

export const createTemplatesAndInitializeIndexes = async () => {
	logger.info(`Creating ES template(s)..`);
	await createTemplate("event", template);

	logger.info(`Initializing Event indexes if it does not exist..`);
	await initializeIndexIfItDoesNotExist("event");
};

export const bulk = (body: any, refreshAfterInsert: boolean = false) => {
	return getClient().bulk({
		index: "event",
    body,
    refresh: refreshAfterInsert
	});
};