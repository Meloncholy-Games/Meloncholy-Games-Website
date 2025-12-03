import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
    ICertificate
} from "aws-cdk-lib/aws-certificatemanager";
import { Distribution, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin, S3StaticWebsiteOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
    ARecord,
    CnameRecord,
    HostedZone,
    MxRecord,
    RecordTarget,
    TxtRecord
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { Bucket, RedirectProtocol } from "aws-cdk-lib/aws-s3";
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

        const websiteDistribution = this.createWebsiteDistribution(certificate);

        this.createDomainRegistration(websiteDistribution);
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

    private createDomainRegistration(websiteDistribution: Distribution) {
        const zone = new HostedZone(this, "cantaloupeHostedZone", {
            zoneName: "meloncholy.games"
        });
        this.createWebsiteRecords(zone, websiteDistribution);
        this.createAPINameRecords(zone);
    }

    private createWebsiteRecords(zone: HostedZone, websiteDistribution: Distribution) {
        new CnameRecord(this, `cantaloupeWebsiteCertificateMapping`, {
            zone,
            recordName: "_99ee3fa051e4bbd1a4e27374900be2c4",
            domainName: "_db132e49113913e322150a2ec860dd33.djqtsrsxkq.acm-validations.aws"
        });
        new ARecord(this, `cantaloupeWebsiteMapping`, {
            zone,
            target: RecordTarget.fromAlias(new CloudFrontTarget(websiteDistribution))
        });
    }

    private createAPINameRecords(zone: HostedZone) {
        new CnameRecord(this, `cantaloupeCertificateMapping`, {
            zone,
            recordName: "_8ba998a1afd9cb749e31427d9f17f3a5.cantaloupe",
            domainName: "_5c875b139848b77f4fb079516c56c1d4.sdgjtdhdhz.acm-validations.aws"
        });
        new CnameRecord(this, `cantaloupeRestApiMapping`, {
            zone,
            recordName: "api.cantaloupe",
            domainName: "d1i9deldy720mv.cloudfront.net"
        });
        new CnameRecord(this, `cantaloupeSubscriptionApiMapping`, {
            zone,
            recordName: "subscriptions.cantaloupe",
            domainName: "d-bv0r65mfbb.execute-api.us-east-1.amazonaws.com"
        });
    }
}

export default CantaloupeWebsiteStack;
