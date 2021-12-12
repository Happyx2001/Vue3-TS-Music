// 封装axios
import axios from "axios";

export function request(config: any) {
    const service = axios.create({
        // 需要先运行 node 写的接口
        baseURL: "http://localhost:3000",
        timeout: 5000,
    })

    // 请求拦截器
    service.interceptors.request.use(
        config => {
            //拦截后需要将拦截下来的请求数据返回发送
            return config;
        },
        err => {
            console.log(err);
        }
    );

    // 响应拦截器
    service.interceptors.response.use(
        res => {
            // 拦截后需要将拦截下来处理成的结果返回
            return res.data;
        },
        err => {
            console.log(err);
        }
    );

    return service(config);
}

export default request