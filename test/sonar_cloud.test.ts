import * as cdk from "aws-cdk-lib";
// import { Template } from 'aws-cdk-lib/assertions';
import { SonarCloudStack } from "../lib/sonar_cloud-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/sonar_cloud-stack.ts

describe("when instantiating SonarCloudStack", () => {
  it("doesnt throw any errors", () => {
    const app = new cdk.App();

    expect(() => new SonarCloudStack(app, "SonarCloudStack")).not.toThrow();
  });
});
