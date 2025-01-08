import { renderHook, waitFor } from '@testing-library/react';
import { useModels } from '../use-models';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('useModels', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  beforeEach(() => {
    queryClient.clear();
    mockFetch.mockClear();
  });

  it('fetches models for specific type', async () => {
    const mockData = {
      ChatModels: [
        { name: 'Test Model', description: 'Test Description' }
      ]
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData)
    });

    const { result } = renderHook(() => useModels('chat'), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('handles errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    const { result } = renderHook(() => useModels('chat'), { wrapper });

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
    });
  });
});