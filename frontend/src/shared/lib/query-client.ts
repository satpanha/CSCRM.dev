/**
 * TanStack Query Client Configuration
 * 
 * Centralized setup for all server state management
 * 
 * Features:
 * - Query caching strategy
 * - Stale time configuration
 * - Error retry logic
 * - Garbage collection
 * 
 * Usage:
 * import { queryClient } from '@/shared/lib/query-client';
 * Wrap app with: <QueryClientProvider client={queryClient}>
 */

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});
