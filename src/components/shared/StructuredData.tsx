import { useEffect } from "react";
import { SITE_CONFIG } from "../../constants/siteConfig";

interface StructuredDataProps {
    type?: "Organization" | "WebSite" | "VideoGame";
    data?: Record<string, unknown>;
}

const StructuredData = ({ type = "Organization", data = {} }: StructuredDataProps) => {
    useEffect(() => {
        const getStructuredData = () => {
            switch (type) {
                case "Organization":
                    return {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: SITE_CONFIG.name,
                        url: SITE_CONFIG.url,
                        logo: `${SITE_CONFIG.url}/favicon.svg`,
                        description: SITE_CONFIG.description,
                        foundingDate: SITE_CONFIG.company.founded.toString(),
                        sameAs: [
                            `https://twitter.com/${SITE_CONFIG.social.twitter.replace("@", "")}`,
                            `https://github.com/${SITE_CONFIG.social.github}`,
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            email: SITE_CONFIG.social.email,
                            contactType: "Customer Support",
                        },
                        ...data,
                    };

                case "WebSite":
                    return {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: SITE_CONFIG.name,
                        url: SITE_CONFIG.url,
                        description: SITE_CONFIG.description,
                        publisher: {
                            "@type": "Organization",
                            name: SITE_CONFIG.name,
                            logo: {
                                "@type": "ImageObject",
                                url: `${SITE_CONFIG.url}/favicon.svg`,
                            },
                        },
                        ...data,
                    };

                case "VideoGame":
                    return {
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        name: "Project Cantaloupe",
                        description: "A 2D platformer adventure that combines tight controls, beautiful art, and a world full of secrets waiting to be discovered.",
                        genre: ["Platformer", "Adventure", "Indie"],
                        gamePlatform: ["PC"],
                        publisher: {
                            "@type": "Organization",
                            name: SITE_CONFIG.name,
                            url: SITE_CONFIG.url,
                        },
                        ...data,
                    };

                default:
                    return {};
            }
        };

        const structuredData = getStructuredData();
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(structuredData);
        script.id = `structured-data-${type}`;

        const existingScript = document.getElementById(`structured-data-${type}`);
        if (existingScript) {
            existingScript.remove();
        }

        document.head.appendChild(script);

        return () => {
            script.remove();
        };
    }, [type, data]);

    return null;
};

export default StructuredData;
