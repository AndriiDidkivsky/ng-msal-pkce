export interface NgConfig {
  scopes: string[];
  popup?: boolean;
}

export const DEFAULT_NG_CONFIG: NgConfig = {
  scopes: [],
  popup: false,
};
