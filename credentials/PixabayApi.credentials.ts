import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class PixabayApi implements ICredentialType {
        name = 'N8nDevPixabayApi';

        displayName = 'Pixabay API';

        icon: Icon = { light: 'file:../nodes/Pixabay/pixabay.svg', dark: 'file:../nodes/Pixabay/pixabay.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://pixabay.com',
                        required: true,
                        placeholder: 'https://pixabay.com',
                        description: 'The base URL of your Pixabay API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
