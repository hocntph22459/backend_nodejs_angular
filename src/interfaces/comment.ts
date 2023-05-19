interface IComment {
    _id: string;
    content: string,
    post:string[],
    author:string[],
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IComment