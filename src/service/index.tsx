import { api, token } from "../server";
class apiService {
  static async getNewsData(page: number, limit: number): Promise<any> {
    const response: any = await api.get(
      `news/public/get?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
  
  static async getActivityData(page: number, limit: number): Promise<any> {
    const response: any = await api.get(
      `activities/public/get?page=${page}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
}

export default apiService;
