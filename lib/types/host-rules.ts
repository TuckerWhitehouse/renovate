export interface HostRule {
  endpoint?: string;
  host?: string;
  hostType?: string;
  domainName?: string;
  hostName?: string;
  json?: true;
  baseUrl?: string;
  token?: string;
  username?: string;
  password?: string;
  insecureRegistry?: boolean;
  platform?: string;
  timeout?: number;
}
