export interface IMElecticity {
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface IElectricity {
  title: string;
  active: boolean;
  months: Array<IMElecticity>;
}
