import { useEffect, useState } from 'react';
import { fetchAuth } from '../api/auth.api';

export const useAuth = () => {
  const [data, setData] = useState<unknown[]>([]);

  useEffect(() => {
    fetchAuth().then(setData);
  }, []);

  return { data };
};
