import { RollSideType } from "../../lib/types/ball";

export interface Props {
  initShuffle: (this: HTMLDivElement, ev: AnimationEvent) => any;
  rollSide: RollSideType;
  className?: string;
}
