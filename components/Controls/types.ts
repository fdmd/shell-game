import { ResultType } from "../Result/types";

export interface Props {
  onClickStartReset: () => void;
  ballPosition: number;
  result: ResultType;
}
