export const template = {
	settings: {
		analysis: {
			normalizer: {
				name_en_normalizer: {
					type: "custom",
					filter: ["uppercase"],
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
}
