import { createQueryKeyStore } from "@lukemorales/query-key-factory";

// Mock data
export const CREDITS_LIST = [
  {
    id: "1",
    label: "Crédito 1",
    value: "$500",
  },
  {
    id: "2",
    label: "Crédito 2",
    value: "$1,500",
  },
  {
    id: "3",
    label: "Crédito 3",
    value: "$2,000",
  },
];

type Credit = {
  id: string;
  label: string;
  value: string;
};

export const queryKeys = createQueryKeyStore({
  credits: {
    all: {
      queryKey: null,
      queryFn: (): Promise<Credit[]> =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(CREDITS_LIST);
          }, 1000);
        }),
    },
  },
});
