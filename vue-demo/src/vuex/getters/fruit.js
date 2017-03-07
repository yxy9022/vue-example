/**
 * Created by jerry on 2016/10/9.
 */
export const searchKey = (store) => {
    return store.fruit.searchKey;
}

export const isEmptySearchKey = (store) => {
    return store.fruit.searchKey == '';
}