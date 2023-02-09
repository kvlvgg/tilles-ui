import type { NuxtAxiosInstance } from '@nuxtjs/axios';

export type User = {
  OK: {
    status: 'OK';
    data: {
      id: string;
      data: {};
      nonce: number;
      walletAddress: string;
      createdAt: string;
      updatedAt: string;
    };
  };

  FAILED: {
    status: 'FAILED';
  };
};

type UserPOST = {
  OK: {
    status: 'OK';
    data: {
      insertedID: string;
      nonce: number;
    };
  };

  FAILED: {
    status: 'FAILED';
  };
};

type Authentication = {
  OK: {
    status: 'OK';
    data: {
      token: string;
      nonce: number;
    };
  };

  FAILED: {
    status: 'FAILED';
  };
};

export default (axios: NuxtAxiosInstance) => ({
  getUser({ walletAddress }: { walletAddress: string }): Promise<User['OK'] | User['FAILED']> {
    return axios
      .get(`/users/${walletAddress}`)
      .then(x => x.data)
      .catch(() => ({ status: 'FAILED' }));
  },

  createUser({ walletAddress }: { walletAddress: string }): Promise<UserPOST['OK'] | UserPOST['FAILED']> {
    return axios
      .post(`/users/`, { walletAddress })
      .then(x => x.data)
      .catch(() => ({ status: 'FAILED' }));
  },

  authenticate({
    walletAddress,
    signature,
  }: {
    walletAddress: string;
    signature: string;
  }): Promise<Authentication['OK'] | Authentication['FAILED']> {
    return axios
      .post(`/users/authentication/`, { signature, walletAddress })
      .then(x => x.data)
      .catch(() => ({ status: 'FAILED' }));
  },
});
