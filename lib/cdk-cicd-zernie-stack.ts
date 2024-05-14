import * as cdk from "aws-cdk-lib";
import {
  CodeBuildStep,
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { PipelineStage } from "./PipelineStage";

export class CdkCicdZernieStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "AwesomePipline", {
      pipelineName: "AwesomePipline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "Popo422/zernie-cicd-test",
          "practice"
        ),
        commands: ["npm ci", "npx cdk synth"],
      }),
    });

    const testStage = pipeline.addStage(
      new PipelineStage(this, "PipelineTestStage", {
        stageName: "test",
      })
    );

    testStage.addPre(
      new CodeBuildStep("unit-tests", {
        commands: ["cd cdk-cicd", "npm ci", "npm test"],
      })
    );
  }
}
