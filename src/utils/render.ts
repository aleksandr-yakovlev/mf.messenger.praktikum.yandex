interface IBlock {
  hide: () => void;
  show: () => void;
  getContent: () => HTMLElement;
}

export const render = (query: string, block: IBlock, element = document) => {
  const root = element.querySelector(query);
  if (root) {
    root.appendChild(block.getContent());
    return root;
  }
};
