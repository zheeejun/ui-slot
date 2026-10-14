export interface ChangeSeedResult {
  error: any;
  active_server_seed_hash: string;
  active_client_seed: string;
  active_nonce: number;
  next_server_seed_hash: string;
}