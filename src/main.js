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

  // eemaldab selle "Hi there!" welcome vaate
  showWelcomeScreen: false,
  initialMessages: [],

  loadPreviousSession: true,
  enableStreaming: false,
});
}
