interface Settings {
	[key: string]: any;
	number_of_shards: string;
	number_of_replicas: string;
}

export interface ESTemplate {
	index_patterns: string[];
	mappings: object;
	settings?: Settings;
}

export const template: ESTemplate = require("../mock-data/template.json");