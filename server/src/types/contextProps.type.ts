interface metadataProps {
    type: string 
    title:  string
    description: string
    createdAt: string
    userId: string
    link: string
}

interface ContextItem {
    id: string;
    score: number;
    metadata: metadataProps;
}

interface ResponseProps {
    query: string;
    context: Array<ContextItem>;
}

export { metadataProps, ContextItem, ResponseProps }; 