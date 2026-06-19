import axios from 'axios';

// The configuration for the Stitch MCP server
const mcpConfig = {
  mcpServers: {
    stitch: {
      serverUrl: import.meta.env.VITE_STITCH_SERVER_URL || 'https://stitch.googleapis.com/mcp',
      headers: {
        'X-Goog-Api-Key': import.meta.env.VITE_STITCH_API_KEY,
        'Content-Type': 'application/json',
      },
    },
  },
};

// Create an Axios instance specifically for the Stitch MCP service
const apiClient = axios.create({
  baseURL: mcpConfig.mcpServers.stitch.serverUrl,
  headers: mcpConfig.mcpServers.stitch.headers,
  timeout: 10000, // 10 seconds timeout
});

class StitchService {
  /**
   * Test the connection to the Stitch MCP server
   * Note: The actual endpoint for testing connectivity depends on the specific MCP server implementation.
   * A GET request to the base URL or a specific /ping or /status endpoint is typical.
   * If it responds with 200/405 without network errors, it's considered reachable.
   */
  async testConnection() {
    try {
      // Sending a minimal request to check connectivity. 
      // Replace '/ping' with the actual health check endpoint if the Stitch API specifies one.
      // Often, a GET request to the root URL is sufficient to verify network connectivity.
      const response = await apiClient.get('/');
      return { success: true, data: response.data, status: response.status };
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Send a request payload to the Stitch MCP server
   * @param {Object} payload The JSON-RPC or REST payload for the MCP
   */
  async sendRequest(payload) {
    try {
      const response = await apiClient.post('/', payload);
      return { success: true, data: response.data };
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Standardized error handling for the service
   */
  handleError(error) {
    let errorMessage = 'An unknown error occurred';
    let statusCode = null;

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage = error.response.data?.error?.message || error.response.data?.message || `Server Error: ${error.response.status}`;
      statusCode = error.response.status;
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'No response received from the server. Please check your network connection.';
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = error.message;
    }

    console.error('Stitch MCP Error:', errorMessage, error);
    
    return {
      success: false,
      error: errorMessage,
      statusCode,
      details: error
    };
  }
}

export const stitchService = new StitchService();
export default stitchService;
