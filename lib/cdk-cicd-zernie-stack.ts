import * as cdk from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class CdkCicdZernieStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, "AwesomePipline", {
      pipelineName: "AwesomePipline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "Popo422/zernie-cicd-test",
          "practice"
        ),
        commands: ["npm ci", "npx cdk synth"],
      }),
    });
  }
}
