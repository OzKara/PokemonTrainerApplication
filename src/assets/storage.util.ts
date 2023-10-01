export class StorageUtil {
  static writeToLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static readFromLocalStorage(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  static writeToSessionStorage(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  static readFromSessionStorage(key: string): any {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
