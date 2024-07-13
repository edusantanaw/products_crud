export interface IGenerateHash {
  generate(value: string): Promise<string>;
}

export interface ICompareHash {
  compare(value: string, hash: string): Promise<boolean>;
}
