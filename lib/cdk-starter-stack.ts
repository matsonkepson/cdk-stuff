import {join} from 'path';
import {Runtime} from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {App, Duration, Stack, StackProps} from 'aws-cdk-lib';

export class CdkStarterStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        const myFunction = new NodejsFunction(this, 'my-function', {
            memorySize: 128,
            timeout: Duration.seconds(5),
            runtime: Runtime.NODEJS_16_X,
            handler: 'main',
            entry: join(__dirname, `../src/my-lambda/index.ts`),
            bundling: {
                minify: true,
                externalModules: ['aws-sdk'],
            },
        });
    }
}
