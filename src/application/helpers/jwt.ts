export interface ITokenGenerator {
  generate(value: string): Promise<string>;
}
