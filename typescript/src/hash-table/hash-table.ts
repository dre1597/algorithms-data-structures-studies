class KeyValuePair<K, V> {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

export class HashTable<K, V> {
  private _table: { [key: string]: KeyValuePair<K, V> } = {};

  public put(key: K, value: V): void {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      this._table[position] = new KeyValuePair(key, value);
    }
  }

  public get(key: K): V | undefined {
    const position = this.hashCode(key);

    const keyValuePair = this._table[position];
    if (keyValuePair !== null && keyValuePair !== undefined) {
      return keyValuePair.value;
    }
  }

  public remove(key: K): void {
    const position = this.hashCode(key);
    const keyValuePair = this._table[position];
    if (keyValuePair !== null && keyValuePair !== undefined) {
      delete this._table[position];
    }
  }

  public size(): number {
    return Object.keys(this._table).length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public clear(): void {
    this._table = {};
  }

  public toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    return JSON.stringify(this._table);
  }

  private hashCode(key: K): number {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.keyToString(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  private keyToString(key: K): string {
    if (key === null) {
      return 'NULL';
    } else if (key === undefined) {
      return 'UNDEFINED';
    } else if (typeof key === 'string' || key instanceof String) {
      return `${key}`;
    }

    return key.toString();
  }
}
