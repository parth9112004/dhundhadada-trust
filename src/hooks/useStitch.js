import { useState, useCallback, useEffect } from 'react';
import { stitchService } from '../services/stitchService';

export const CONNECTION_STATUS = {
  DISCONNECTED: 'Disconnected',
  CONNECTING: 'Connecting',
  CONNECTED: 'Connected',
  ERROR: 'Error',
};

export const useStitch = () => {
  const [connectionStatus, setConnectionStatus] = useState(CONNECTION_STATUS.DISCONNECTED);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Helper to clear errors
  const clearError = () => setError(null);

  // Test connection to the Stitch MCP server
  const testConnection = useCallback(async () => {
    setConnectionStatus(CONNECTION_STATUS.CONNECTING);
    clearError();
    
    const response = await stitchService.testConnection();
    
    if (response.success) {
      setConnectionStatus(CONNECTION_STATUS.CONNECTED);
    } else {
      setConnectionStatus(CONNECTION_STATUS.ERROR);
      setError(response.error);
    }
    
    return response.success;
  }, []);

  // Send a request to the MCP server
  const sendRequest = useCallback(async (payload) => {
    if (connectionStatus !== CONNECTION_STATUS.CONNECTED) {
      // Attempt to connect first if not already connected
      const isConnected = await testConnection();
      if (!isConnected) {
        return null;
      }
    }

    setLoading(true);
    clearError();
    
    const response = await stitchService.sendRequest(payload);
    
    setLoading(false);
    
    if (response.success) {
      setData(response.data);
      return response.data;
    } else {
      setError(response.error);
      return null;
    }
  }, [connectionStatus, testConnection]);

  // Optional: Auto-connect on mount
  useEffect(() => {
    testConnection();
  }, [testConnection]);

  return {
    connectionStatus,
    loading,
    error,
    data,
    testConnection,
    sendRequest,
    clearError,
  };
};

export default useStitch;
