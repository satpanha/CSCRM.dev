import { useAuth } from '../hooks/useAuth';

export const Auth = () => {
  const { data } = useAuth();

  return (
    <div>
      <h1>Auth Feature</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
