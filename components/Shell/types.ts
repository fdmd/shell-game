export interface Props {
  id: number;
  isShuffling: boolean;
  shuffleTo: number;
  onIteration: () => void;
  onClick: (this: HTMLDivElement, ev: MouseEvent) => any;
  isGameRunning: boolean;
  showContent: boolean;
  isWinner: boolean;
}
