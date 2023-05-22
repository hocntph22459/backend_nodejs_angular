interface IhashTag {
    _id: string;
    name: string,
    posts: string[],
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IhashTag