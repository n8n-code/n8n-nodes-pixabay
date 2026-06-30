import type { INodeProperties } from 'n8n-workflow';

export const videosDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					]
				}
			},
			"options": [
				{
					"name": "Search Videos",
					"value": "Search Videos",
					"action": "Search videos",
					"description": "Search royalty-free videos and animations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/videos/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/videos/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "Your Pixabay API key.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "URL-encoded search term. If omitted, all results are returned. Max 100 characters. Example: `yellow+flower`.",
			"default": "yellow+flower",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Lang",
			"name": "lang",
			"description": "Language code of the language to search in.",
			"default": "en",
			"type": "options",
			"options": [
				{
					"name": "Cs",
					"value": "cs"
				},
				{
					"name": "Da",
					"value": "da"
				},
				{
					"name": "De",
					"value": "de"
				},
				{
					"name": "En",
					"value": "en"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Fr",
					"value": "fr"
				},
				{
					"name": "ID",
					"value": "id"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "Hu",
					"value": "hu"
				},
				{
					"name": "Nl",
					"value": "nl"
				},
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Pl",
					"value": "pl"
				},
				{
					"name": "Pt",
					"value": "pt"
				},
				{
					"name": "Ro",
					"value": "ro"
				},
				{
					"name": "Sk",
					"value": "sk"
				},
				{
					"name": "Fi",
					"value": "fi"
				},
				{
					"name": "Sv",
					"value": "sv"
				},
				{
					"name": "Tr",
					"value": "tr"
				},
				{
					"name": "Vi",
					"value": "vi"
				},
				{
					"name": "Th",
					"value": "th"
				},
				{
					"name": "Bg",
					"value": "bg"
				},
				{
					"name": "Ru",
					"value": "ru"
				},
				{
					"name": "El",
					"value": "el"
				},
				{
					"name": "Ja",
					"value": "ja"
				},
				{
					"name": "Ko",
					"value": "ko"
				},
				{
					"name": "Zh",
					"value": "zh"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "lang",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Retrieve individual items by ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Video Type",
			"name": "video_type",
			"description": "Filter results by video type.",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Film",
					"value": "film"
				},
				{
					"name": "Animation",
					"value": "animation"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "video_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"description": "Filter results by category.",
			"default": "backgrounds",
			"type": "options",
			"options": [
				{
					"name": "Backgrounds",
					"value": "backgrounds"
				},
				{
					"name": "Fashion",
					"value": "fashion"
				},
				{
					"name": "Nature",
					"value": "nature"
				},
				{
					"name": "Science",
					"value": "science"
				},
				{
					"name": "Education",
					"value": "education"
				},
				{
					"name": "Feelings",
					"value": "feelings"
				},
				{
					"name": "Health",
					"value": "health"
				},
				{
					"name": "People",
					"value": "people"
				},
				{
					"name": "Religion",
					"value": "religion"
				},
				{
					"name": "Places",
					"value": "places"
				},
				{
					"name": "Animals",
					"value": "animals"
				},
				{
					"name": "Industry",
					"value": "industry"
				},
				{
					"name": "Computer",
					"value": "computer"
				},
				{
					"name": "Food",
					"value": "food"
				},
				{
					"name": "Sports",
					"value": "sports"
				},
				{
					"name": "Transportation",
					"value": "transportation"
				},
				{
					"name": "Travel",
					"value": "travel"
				},
				{
					"name": "Buildings",
					"value": "buildings"
				},
				{
					"name": "Business",
					"value": "business"
				},
				{
					"name": "Music",
					"value": "music"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Min Width",
			"name": "min_width",
			"description": "Minimum width in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Min Height",
			"name": "min_height",
			"description": "Minimum height in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Editors Choice",
			"name": "editors_choice",
			"description": "Select items that have received an Editor's Choice award.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "editors_choice",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Safesearch",
			"name": "safesearch",
			"description": "Only return results suitable for all ages.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "safesearch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "How results should be ordered.",
			"default": "popular",
			"type": "options",
			"options": [
				{
					"name": "Popular",
					"value": "popular"
				},
				{
					"name": "Latest",
					"value": "latest"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Pagination page number.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Number of results per page.",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Callback",
			"name": "callback",
			"description": "JSONP callback function name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "callback",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "Pretty",
			"name": "pretty",
			"description": "Indent JSON output. Not for production use.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "pretty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
		{
			"displayName": "API Key Auth API Key",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Pixabay API key. Register at https://pixabay.com/accounts/register/.",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Videos"
					],
					"operation": [
						"Search Videos"
					]
				}
			}
		},
];
