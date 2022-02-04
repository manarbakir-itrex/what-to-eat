/**
 * This is a mock of backend work
 * */
import { objToKeyValueArr } from '../services/utils';

export default class MockedApiAdapter<T> {
  key: string;

  localData: T[];

  constructor(key: string, defaultData: T[] = []) {
    this.key = key;
    this.localData = this.initLocalData(defaultData);
  }

  private initLocalData = (defaultData: T[]) => {
    let data = this.getFromLS();

    if (!data) {
      data = defaultData;
      this.updateLS(data);
    }

    return data;
  };

  private getFromLS = () => {
    try {
      const dataFromLocalStorage = localStorage.getItem(this.key);
      return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : null;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  private updateLS = (data: T[] = this.localData) => {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  private static filterRecords = (records: any[], filters: any) => {
    const filtersArr = objToKeyValueArr(filters);
    return !filtersArr.length
      ? records
      : records.filter((item: any) => filtersArr.some((filter) => {
        if (!Array.isArray(filter.value) || !filter.value.length) {
          return true;
        }

        const field = item[filter.key];

        return Array.isArray(field)
          ? field.some((fieldEl) => filter.value.includes(fieldEl))
          : filter.value.includes(field);
      }));
  };

  private static sortRecordsByNumbers = (
    records: any[],
    sort: string,
  ) => records.sort((a: any, b: any) => (b[sort] || 0) - (a[sort] || 0));

  getList = (filters = {}, sort = '') => new Promise<T[]>((res) => {
    let result = this.localData;

    if (filters) {
      result = MockedApiAdapter.filterRecords(result, filters);
    }

    if (sort) {
      result = MockedApiAdapter.sortRecordsByNumbers(result, sort);
    }

    res(result);
  });

  get = (id: string) => new Promise<T>((res, rej) => {
    const foundRestaurant = this.localData.find((data: any) => (data.id === id));

    foundRestaurant
      ? res(foundRestaurant)
      : rej(new Error('not found'));
  });

  post = (id: string, changes: any) => new Promise<void>((res, rej) => {
    const index = this.localData.findIndex((data: any) => (data.id === id));

    if (index !== -1) {
      this.localData[index] = {
        ...this.localData[index],
        ...changes,
      };
      this.updateLS() ? res() : rej(new Error('not updated'));
    } else {
      rej(new Error('not found'));
    }
  });
}
