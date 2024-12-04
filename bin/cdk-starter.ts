import {App} from 'aws-cdk-lib';
import {CdkStarterStack} from '../lib/cdk-starter-stack';

const app = new App();
new CdkStarterStack(app, 'cdk-stack', {
    stackName: 'cdk-stack'
});
