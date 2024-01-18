import { createContext, useState } from "react";

interface PageIndexContextValue {
  pageIdx: number;
  setPageIdx: React.Dispatch<React.SetStateAction<number>>;
}

const PageIndexContext = createContext<PageIndexContextValue>({
  pageIdx: 0,
  setPageIdx() {},
});

export const PageIndexProvider = ({ children }: any) => {
  const [pageIdx, setPageIdx] = useState(0);

  return (
    <PageIndexContext.Provider value={{ pageIdx, setPageIdx }}>
      {children}
    </PageIndexContext.Provider>
  );
};

export default PageIndexContext;
