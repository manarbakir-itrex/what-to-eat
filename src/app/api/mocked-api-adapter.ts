/**
 * This is a mock of backend work
 * */

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

  getList = () => new Promise<T[]>((res) => {
    res(this.localData);
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
