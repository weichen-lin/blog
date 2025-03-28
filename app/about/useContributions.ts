import { useQuery } from '@tanstack/react-query';

const API_PATH = '/api/github/contribution';

const useContributions = () => {
  const query = useQuery({
    queryKey: [API_PATH],
    queryFn: async () => {
      const response = await fetch(API_PATH, { method: 'GET' });

      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useContributions;
