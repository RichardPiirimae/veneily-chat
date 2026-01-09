import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './style.css';

const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

if (!webhookUrl) {
  document.body.innerHTML =
    '<div style="padding:16px;font-family:system-ui">Missing env: VITE_N8N_WEBHOOK_URL</div>';
} else {
  createChat({
    webhookUrl,
    mode: 'fullscreen',
    target: '#n8n-chat',
    showWelcomeScreen: false,
    initialMessages: [],
    loadPreviousSession: true,
    // Kui sul on n8n Chat Triggeris streaming response ON, pane true:
    enableStreaming: false,
  });
}
