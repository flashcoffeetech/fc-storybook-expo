import {IStore} from '@appTypes/store.type';

export const restrictionSorted = (
  storeList: IStore[],
  currentUserEmail: string,
) => {
  return storeList.filter(item =>
    item?.config && item?.config?.restrictionEmail
      ? currentUserEmail?.endsWith(item?.config?.restrictionEmail)
      : item,
  );
};

export const notRestrictionSorted = (storeList: IStore[]) => {
  return storeList.filter(item =>
    item?.config && item?.config?.restrictionEmail
      ? item?.config?.restrictionEmail?.length === 0
      : item,
  );
};
