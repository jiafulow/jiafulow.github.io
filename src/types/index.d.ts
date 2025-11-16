export type Site = {
    title: string;
    description: string;
    author: string;
    creator: string;
    url: string;
};

export type PageProps = {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: Date;
    modifiedTime?: Date;
    author?: string;
    tags?: string[];
    noindex?: boolean;
    category?: string;
    // Pagination support
    prevUrl?: string;
    nextUrl?: string;
    // Language/locale support
    alternates?: Array<{ lang: string; url: string }>;
}