import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
    ICertificate
} from "aws-cdk-lib/aws-certificatemanager";
import { Distribution, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin, S3StaticWebsiteOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { ARecord, CnameRecord, HostedZone, RecordTarget, TxtRecord } from "aws-cdk-lib/aws-route53";
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
        const wwwRedirectDistribution = this.createWWWRedirectBucket(certificate);

        this.createDomainRegistration(websiteDistribution, wwwRedirectDistribution);
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

    private createWWWRedirectBucket(certificate: ICertificate): Distribution {
        const wwwRedirectBucketName = "www.meloncholy.games";
        const wwwRedirectBucket = new Bucket(this, wwwRedirectBucketName, {
            bucketName: wwwRedirectBucketName,
            removalPolicy: RemovalPolicy.DESTROY,
            websiteRedirect: {
                hostName: "meloncholy.games",
                protocol: RedirectProtocol.HTTPS
            }
        });
        return new Distribution(this, "wwwRedirectDistribution", {
            defaultBehavior: {
                origin: new S3StaticWebsiteOrigin(wwwRedirectBucket),
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
            },
            certificate,
            domainNames: ["www.meloncholy.games"]
        });
    }

    private createDomainRegistration(
        websiteDistribution: Distribution,
        wwwRedirectDistribution: Distribution
    ) {
        const zone = new HostedZone(this, "cantaloupeHostedZone", {
            zoneName: "meloncholy.games"
        });
        this.createEmailRecords(zone);
        this.createWebsiteRecords(zone, websiteDistribution, wwwRedirectDistribution);
        this.createAPINameRecords(zone);
    }

    private createEmailRecords(zone: HostedZone) {
        this.createEmailDomainAuthenticationMapping(zone);
        this.createEmailDKIMMapping(zone);
        new TxtRecord(this, `cantaloupeEmailDMARCRecord`, {
            zone,
            recordName: "_dmarc",
            values: ["v=DMARC1; p=quarantine"]
        });
    }

    private createEmailDomainAuthenticationMapping(zone: HostedZone) {
        ["url6974", "47611486"].map(
            (value) =>
                new CnameRecord(this, `cantaloupeEmailLinkBrandingRecord-${value}`, {
                    zone,
                    recordName: value,
                    domainName: "sendgrid.net"
                })
        );
        new CnameRecord(this, "cantaloupeEmailDomainAuthenticationRecord", {
            zone,
            recordName: "em2986",
            domainName: "u47611486.wl237.sendgrid.net"
        });
    }

    private createEmailDKIMMapping(zone: HostedZone): CnameRecord[] {
        return [1, 2].map(
            (i) =>
                new CnameRecord(this, `cantaloupeEmailDKIMRecord-${i}`, {
                    zone,
                    recordName: `s${i}._domainkey`,
                    domainName: `s${i}.domainkey.u47611486.wl237.sendgrid.net`
                })
        );
    }

    private createWebsiteRecords(
        zone: HostedZone,
        websiteDistribution: Distribution,
        wwwRedirectDistribution: Distribution
    ) {
        new CnameRecord(this, `cantaloupeWebsiteCertificateMapping`, {
            zone,
            recordName: "_99ee3fa051e4bbd1a4e27374900be2c4",
            domainName: "_db132e49113913e322150a2ec860dd33.djqtsrsxkq.acm-validations.aws"
        });
        new ARecord(this, `cantaloupeWebsiteMapping`, {
            zone,
            target: RecordTarget.fromAlias(new CloudFrontTarget(websiteDistribution))
        });
        new ARecord(this, `cantaloupeWWWRedirectMapping`, {
            zone,
            recordName: "www",
            target: RecordTarget.fromAlias(new CloudFrontTarget(wwwRedirectDistribution))
        });
    }

    private createAPINameRecords(zone: HostedZone) {
        new CnameRecord(this, `cantaloupeCertificateMapping`, {
            zone,
            recordName: "_8ba998a1afd9cb749e31427d9f17f3a5",
            domainName: "_5c875b139848b77f4fb079516c56c1d4.sdgjtdhdhz.acm-validations.aws"
        });
        new CnameRecord(this, `cantaloupeRestApiMapping`, {
            zone,
            recordName: "lobby.cantaloupe",
            domainName: "d3rbv3jijyzuig.cloudfront.net"
        });
        new CnameRecord(this, `cantaloupeSubscriptionApiMapping`, {
            zone,
            recordName: "subscriptions.cantaloupe",
            domainName: "d-1d6hc159lj.execute-api.us-east-1.amazonaws.com"
        });
    }
}

export default CantaloupeWebsiteStack;
