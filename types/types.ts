export interface User {
    id: number;
    fist_name: string;
    email: string;
    badge: number;
    last_name: string;
    phone: string;
    role: number;
    status: number;
    subscription_type: number;
    trading_account: number;
    xp: number;
  }

  export interface PipPair {
    pair: string;
    coefficient: number;
  }