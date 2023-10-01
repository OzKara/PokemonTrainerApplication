import { Trainer } from "../models/trainer.model"

export class StorageUtil {
    public static saveStorage<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public static readStorage<T>(key: string): T | undefined {
        const storedValue = localStorage.getItem(key)
        try {
            if (storedValue) {
                return JSON.parse(storedValue) as T
            } else {
                return undefined
            }
        }
        catch(e) {
            localStorage.removeItem(key)
            return undefined;
        }
    }
}

