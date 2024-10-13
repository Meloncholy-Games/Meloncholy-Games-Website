import { App, Environment } from "aws-cdk-lib";
import CantaloupeWebsiteStack from "./cantaloupeWebsiteStack";

const app = new App();
const env: Environment = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
};

new CantaloupeWebsiteStack(app, "CantaloupeWebsiteStack", { env });
