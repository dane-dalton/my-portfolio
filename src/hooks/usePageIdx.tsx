import { useContext } from "react";
import PageIndexContext from "../context/PageIndexProvider";

const usePageIdx = () => {
  return useContext(PageIndexContext);
};

export default usePageIdx;
