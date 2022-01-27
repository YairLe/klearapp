interface ISelected {
  [key: string]: boolean;
  lifestyle: boolean;
  beauty: boolean;
  food: boolean;
}

export interface IState {
  influencer: {
    name: string;
    selected: ISelected;
    brands: Array<string>;
  };
}
