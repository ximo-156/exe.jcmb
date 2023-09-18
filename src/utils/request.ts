import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// // 定义请求函数
// export async function request(url: string, ip: string, params: object): Promise<AxiosResponse> {
//     const config: AxiosRequestConfig = {
//         url: `${url}/${ip}`,
//         method: 'GET',
//         params: params,
//     };

//     try {
//         const response: AxiosResponse = await axios(config);
//         // 在这里处理接口调用成功后的逻辑
//         console.log(response.data);
//         return response;
//     } catch (error) {
//         // 在这里处理接口调用失败后的逻辑
//         console.error(error);
//         throw error;
//     }
// }


export async function request<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    try {
        const response: AxiosResponse<T> = await axios(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
}
