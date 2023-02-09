import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AUTH_API_CONFIG } from '@/constants/api';

import Users from '@/api/users';
import TwitterProjects from '@/api/twitter_projects';

export default (axios: NuxtAxiosInstance) => ({
  Users: Users(
    axios.create({
      baseURL: AUTH_API_CONFIG.BASE_URL,
      headers: { Authorization: `Bearer ${AUTH_API_CONFIG.BEARER_TOKEN}` },
    })
  ),

  TwitterProjects: TwitterProjects(axios),
});
