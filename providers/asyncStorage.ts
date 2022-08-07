import { AsyncStorage } from "@react-native-async-storage/async-storage";

class AsyncStorageService {
  async setItem(key:any, data:any) {
    try {
      return await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
  async getItem(key:any) {
    try {
      const result = await AsyncStorage.getItem(key, null);
      return JSON.parse(result);
    } catch (e) {
      console.log(e);
    }
  }

  async clear() {
    await AsyncStorage.clear()
  }
}

const asyncStorageService = new AsyncStorageService();

export default asyncStorageService;