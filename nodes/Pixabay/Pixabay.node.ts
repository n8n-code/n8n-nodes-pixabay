import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { imagesDescription } from './resources/images';
import { videosDescription } from './resources/videos';

export class Pixabay implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Pixabay',
                name: 'N8nDevPixabay',
                icon: { light: 'file:./pixabay.svg', dark: 'file:./pixabay.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'RESTful API to search and retrieve royalty-free images videos music and sound effects from Pixabay',
                defaults: { name: 'Pixabay' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevPixabayApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Images",
					"value": "Images",
					"description": "Search and retrieve royalty-free images, illustrations, and vectors."
				},
				{
					"name": "Videos",
					"value": "Videos",
					"description": "Search and retrieve royalty-free videos and animations."
				}
			],
			"default": ""
		},
		...imagesDescription,
		...videosDescription
                ],
        };
}
