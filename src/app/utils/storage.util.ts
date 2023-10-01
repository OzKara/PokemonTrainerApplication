import { Trainer } from "../models/trainer.model"

export class StorageUtil {
    public static saveStorage<T>(key: string, value: T) {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    public static readStorage<T>(key: string): T | undefined {
        const storedValue = sessionStorage.getItem(key)
        try {
            if (storedValue) {
                return JSON.parse(storedValue) as T
            } else {
                return undefined
            }
        }
        catch(e) {
            sessionStorage.removeItem(key)
            return undefined;
        }
    }
}

