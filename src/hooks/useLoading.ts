// useLoading.ts
import { useState } from "react";

type UseLoadingType = () => [boolean, () => void, () => void];

const useLoading: UseLoadingType = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return [isLoading, startLoading, stopLoading];
};

export default useLoading;
