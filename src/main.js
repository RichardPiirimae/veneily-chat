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
  showWelcomeScreen: true,
  loadPreviousSession: true,

  initialMessages: [],

  i18n: {
    en: {
      title: 'Asiakaspalvelu 💬',
      subtitle: 'Kysy veneilytarvikkeista, toimituksesta tai palautuksista.',
      getStarted: 'Aloita uusi keskustelu',
      inputPlaceholder: 'Kirjoita kysymyksesi…',
      footer: '',
    },
  },
});
}
