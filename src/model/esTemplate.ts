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

export const template: ESTemplate = {
	settings: {
		number_of_shards: "1",
		number_of_replicas: "1",
		analysis: {
			normalizer: {
				name_en_normalizer: {
					type: "custom",
					filter: ["uppercase"],
				},
			},
		},
	},
	index_patterns: [
		"event*"
	],
	mappings: {
		properties: {
			id: {
				type: "keyword"
			},
			name: {
				type: "object",
				properties: {
					EN: {
						type: "text",
						fields: {
							raw: {
								type: "keyword",
								normalizer: "name_en_normalizer",
							},
						},
					},
				},
			},
			eventSessions: {
				type: "nested",
				properties: {
					publishStartDateTime: {
						type: "date",
					},
					publishEndDateTime: {
						type: "date",
					},
					sessionId: {
						type: "keyword"
					},
				},
			},
		},
	},
}
