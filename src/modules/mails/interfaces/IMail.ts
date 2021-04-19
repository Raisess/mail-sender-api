export interface IMail {
  receivers: Array<string>;
  subject?: string;
  content: string;
}
