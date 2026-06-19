import React, { useState } from 'react';
import { useStitch, CONNECTION_STATUS } from '../hooks/useStitch';

const McpTestPage = () => {
  const { 
    connectionStatus, 
    loading, 
    error, 
    data, 
    testConnection, 
    sendRequest 
  } = useStitch();

  const [requestPayload, setRequestPayload] = useState('{\n  "jsonrpc": "2.0",\n  "method": "listTools",\n  "id": 1\n}');

  const handleTestConnection = async () => {
    await testConnection();
  };

  const handleSendRequest = async () => {
    try {
      const parsedPayload = JSON.parse(requestPayload);
      await sendRequest(parsedPayload);
    } catch (e) {
      alert('Invalid JSON format in request payload.');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case CONNECTION_STATUS.CONNECTED: return 'bg-emerald-500';
      case CONNECTION_STATUS.CONNECTING: return 'bg-amber-500 animate-pulse';
      case CONNECTION_STATUS.ERROR: return 'bg-rose-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Stitch MCP Connection Test
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Test your connection and interactions with the Google Stitch Model Context Protocol server.
          </p>
        </header>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-700/50 pb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(connectionStatus)}`}></div>
                <span className="font-medium text-sm tracking-wide">
                  {connectionStatus}
                </span>
              </div>
            </div>
            <button
              onClick={handleTestConnection}
              disabled={connectionStatus === CONNECTION_STATUS.CONNECTING}
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 transition-colors rounded-lg font-medium shadow-sm disabled:opacity-50"
            >
              Test Connection
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Request Panel */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-slate-300">Request Payload</h2>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">JSON-RPC</span>
              </div>
              <textarea
                value={requestPayload}
                onChange={(e) => setRequestPayload(e.target.value)}
                className="w-full h-64 bg-slate-900/80 border border-slate-700 rounded-xl p-4 font-mono text-sm text-indigo-300 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none resize-none"
                spellCheck="false"
              />
              <button
                onClick={handleSendRequest}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:from-indigo-700 active:to-purple-700 rounded-xl font-bold tracking-wide shadow-lg shadow-indigo-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Send Request'}
              </button>
            </div>

            {/* Response Panel */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-slate-300">Response / Output</h2>
              </div>
              
              <div className="relative w-full h-[calc(100%-3.5rem)] min-h-64 bg-slate-900/80 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
                
                {error && (
                  <div className="m-4 p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                    <h3 className="text-rose-400 font-semibold mb-1">Error Occurred</h3>
                    <p className="text-sm text-rose-300/80 break-words">{error}</p>
                  </div>
                )}
                
                {!error && data && (
                  <div className="flex-1 p-4 overflow-auto">
                    <pre className="text-sm font-mono text-emerald-300 break-words whitespace-pre-wrap">
                      {JSON.stringify(data, null, 2)}
                    </pre>
                  </div>
                )}

                {!error && !data && (
                  <div className="flex-1 flex items-center justify-center text-slate-500 italic">
                    Awaiting response...
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default McpTestPage;
