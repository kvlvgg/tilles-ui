type StoreConstants = Record<string, string>;
type StorePrefixedConstants<T extends string, K extends StoreConstants> = Record<keyof K, `${T}/${K[keyof K]}`>;

export default class StoreHelper {
  public static AddStorePrefix<T extends string, K extends StoreConstants>(prefix: T, Actions: K) {
    const objMap = Object.fromEntries(Object.entries(Actions).map(([k, v]) => [k, `${prefix}/${v}`]));

    return objMap as StorePrefixedConstants<T, K>;
  }

  public static setProperty(entity: any, chain: string, value: any) {
    const propChain = chain.split('.');
    if (propChain.length === 1) {
      entity[propChain[0]] = value;
      return;
    }

    const firstProp = propChain.shift();
    this.setProperty(entity[firstProp!], propChain.join('.'), value);
  }
}
