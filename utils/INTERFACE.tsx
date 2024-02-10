export interface itemData {
    title: string,
    description: string,
    tools: string[],
}
export interface selectedItemData extends itemData {
    cover: string,
    video?: string,
    work: string,
    type: string,
}

export interface featuredItemData extends itemData {
    embed: string,
    icon: string,
    subcategory: string,
}
