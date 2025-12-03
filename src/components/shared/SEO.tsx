import { useEffect } from "react";

type SEOProps = {
    title?: string;
    description?: string;
    keywords?: string;
}

const SEO = ({
    title = "Meloncholy Games",
    description = "Indie game development studio creating unique gaming experiences with passion and creativity.",
    keywords = "indie games, game development, video games, gaming, meloncholy games"
}: SEOProps) => {
    const fullTitle = title === "Meloncholy Games" ? title : `${title} | Meloncholy Games`;

    useEffect(() => {
        document.title = fullTitle;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", keywords);
        }
    }, [fullTitle, description, keywords]);

    return null;
};

export default SEO;
