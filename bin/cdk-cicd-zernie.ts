#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCicdZernieStack } from '../lib/cdk-cicd-zernie-stack';

const app = new cdk.App();
new CdkCicdZernieStack(app, 'CdkCicdZernieStack', {
});

app.synth()