interface IBlock {
  hide: () => void;
  show: () => void;
  getContent: () => HTMLElement;
}

export const render = (query: string, block: IBlock, element = document): HTMLElement => {
  const root = element.querySelector(query);
  return root ? root.appendChild(block.getContent()) : block.getContent();
};
