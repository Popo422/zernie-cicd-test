import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';


export class CdkCicdZernieStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
}
