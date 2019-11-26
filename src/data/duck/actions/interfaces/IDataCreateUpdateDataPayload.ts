export default interface IDataCreateUpdateDataPayload<T> {
    data: { [dataId: string]: T};
}
