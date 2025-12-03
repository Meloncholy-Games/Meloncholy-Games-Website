import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
    ICertificate
} from "aws-cdk-lib/aws-certificatemanager";
import { Distribution, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

import { Construct } from "constructs";

class CantaloupeWebsiteStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const certificate = new Certificate(this, "cantaloupeCertificate", {
            domainName: "meloncholy.games",
            subjectAlternativeNames: ["*.meloncholy.games"],
            validation: CertificateValidation.fromDns()
        });

        this.createWebsiteDistribution(certificate);
    }

    private createWebsiteDistribution(certificate: ICertificate): Distribution {
        const websiteBucketName = "meloncholy.games";
        const websiteBucket = new Bucket(this, websiteBucketName, {
            bucketName: websiteBucketName,
            removalPolicy: RemovalPolicy.DESTROY
        });

        const websiteDistribution = new Distribution(this, "websiteDistribution", {
            defaultBehavior: {
                origin: S3BucketOrigin.withOriginAccessControl(websiteBucket),
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
            },
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: "/index.html"
                }
            ],
            certificate,
            domainNames: ["meloncholy.games"]
        });

        new BucketDeployment(this, "DeployWebsite", {
            sources: [Source.asset("./dist")],
            destinationBucket: websiteBucket,
            distribution: websiteDistribution,
            distributionPaths: ["/index.html", "/assets/*.js"]
        });

        return websiteDistribution;
    }
}

export default CantaloupeWebsiteStack;
