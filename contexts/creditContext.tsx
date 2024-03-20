import { createContext, useContext, useState } from "react";

import { Credit } from "@/api/queryKeys";

type CreditData = {
  name?: string;
  email?: string;
  credit?: Credit;
};

type CreditContextType = {
  data: CreditData;
  update: (data: CreditData) => void;
};

type CreditProviderProps = {
  children: React.ReactNode;
};

const CreditContext = createContext<CreditContextType>({} as CreditContextType);

const initialState: CreditData = {
  name: undefined,
  email: undefined,
  credit: undefined,
};

function CreditProvider({ children }: CreditProviderProps) {
  const [data, setData] = useState<CreditData>(initialState);

  return (
    <CreditContext.Provider
      value={{
        data,
        update: (newData) => {
          setData((current) => ({ ...current, ...newData }));
        },
      }}
    >
      {children}
    </CreditContext.Provider>
  );
}

function useCreditContext() {
  const context = useContext(CreditContext);

  if (context) {
    return context;
  }

  throw new Error(`useCreditContext must be used within a CreditProvider`);
}

export { CreditProvider, useCreditContext };
