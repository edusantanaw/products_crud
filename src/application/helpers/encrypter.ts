export interface IGenerateHash {
  generate(value: string): Promise<string>;
}
