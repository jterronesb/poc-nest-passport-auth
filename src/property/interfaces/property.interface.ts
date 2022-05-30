export interface IProperty extends Document {
  readonly name: string;
  readonly image: string;
  readonly description: string;
  readonly map: string;
  readonly date: string;
  readonly financing: string;
  readonly price: number;
}
