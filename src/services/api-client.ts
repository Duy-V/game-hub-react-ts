import axios, { AxiosRequestConfig } from "axios";

//     endpoint: string,
//     requestConfig?: AxiosRequestConfig,
//     deps?: any[]
//   ) => {
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const { isLoading, startLoading, stopLoading } = useLoading();

//     // const [isLoading, setLoading] = useState(false);
//     useEffect(
//       () => {
//         const controller = new AbortController();
//         startLoading();
//         apiClient
//           .get<FetchResponse<T>>(endpoint, {
//             signal: controller.signal,
//             ...requestConfig,
//           })
//           .then((res) => {
//             setData(res.data?.results);
//             stopLoading();
//           })
//           .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setError(err.message);
//             stopLoading();
//           });
//         return () => controller.abort();
//       },
//       deps ? [...deps] : []
//     );
//     return { data, error, isLoading };
//   };
//   export default useData;
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b1c35ffd59d74977809c22eff4cccb0b",
  },
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
