import type { INodeProperties } from 'n8n-workflow';

export const imagesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					]
				}
			},
			"options": [
				{
					"name": "Search Images",
					"value": "Search Images",
					"action": "Search images",
					"description": "Search royalty-free photos, illustrations, and vectors.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
					]
				}
			}
		},
		{
			"displayName": "Image Type",
			"name": "image_type",
			"description": "Filter results by image type.",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Photo",
					"value": "photo"
				},
				{
					"name": "Illustration",
					"value": "illustration"
				},
				{
					"name": "Vector",
					"value": "vector"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "image_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Search Images"
					]
				}
			}
		},
		{
			"displayName": "Orientation",
			"name": "orientation",
			"description": "Image orientation.",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Horizontal",
					"value": "horizontal"
				},
				{
					"name": "Vertical",
					"value": "vertical"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "orientation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
					]
				}
			}
		},
		{
			"displayName": "Colors",
			"name": "colors",
			"description": "Filter images by color properties. Comma-separated list for multiple values.",
			"default": "grayscale",
			"type": "options",
			"options": [
				{
					"name": "Grayscale",
					"value": "grayscale"
				},
				{
					"name": "Transparent",
					"value": "transparent"
				},
				{
					"name": "Red",
					"value": "red"
				},
				{
					"name": "Orange",
					"value": "orange"
				},
				{
					"name": "Yellow",
					"value": "yellow"
				},
				{
					"name": "Green",
					"value": "green"
				},
				{
					"name": "Turquoise",
					"value": "turquoise"
				},
				{
					"name": "Blue",
					"value": "blue"
				},
				{
					"name": "Lilac",
					"value": "lilac"
				},
				{
					"name": "Pink",
					"value": "pink"
				},
				{
					"name": "White",
					"value": "white"
				},
				{
					"name": "Gray",
					"value": "gray"
				},
				{
					"name": "Black",
					"value": "black"
				},
				{
					"name": "Brown",
					"value": "brown"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "colors",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
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
						"Images"
					],
					"operation": [
						"Search Images"
					]
				}
			}
		},
];
