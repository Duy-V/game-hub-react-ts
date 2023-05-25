import axios from "axios";

// const useData = <T>(
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
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b1c35ffd59d74977809c22eff4cccb0b",
  },
});
