import Vapi from '@vapi-ai/web';

// Initialize VAPI client
const vapi = new Vapi({
  apiKey: process.env.NEXT_PUBLIC_VAPI_API_KEY,
});

export const startVoiceCall = async () => {
  try {
    const call = await vapi.startCall({
      assistant: {
        name: 'Axtray Assistant',
        model: 'gpt-3.5-turbo',
        systemPrompt: 'You are a helpful AI assistant for Axtray, a company specializing in AI agent development and intelligent automation. Be professional, concise, and focus on providing value to the user\'s queries.',
      },
      voice: {
        provider: 'elevenlabs',
        voiceId: '21m00Tcm4TlvDq8ikWAM', // Default voice ID
      },
    });

    return call;
  } catch (error) {
    console.error('Error starting voice call:', error);
    throw error;
  }
};

export const endVoiceCall = async (callId: string) => {
  try {
    await vapi.endCall(callId);
  } catch (error) {
    console.error('Error ending voice call:', error);
    throw error;
  }
}; 