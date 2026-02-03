/**
 * Простая форма обратной связи с отправкой на вебхук (n8n и др.).
 * Состояния: idle, sending, success, error. Honeypot против ботов.
 */
import { useState, useCallback } from 'react';

export interface ContactFormProps {
  /** URL вебхука для POST-запроса (например n8n). Пустая строка — форма не отправляет. */
  webhookUrl: string;
}

const INITIAL = { name: '', contact: '', message: '', consent: false, hp: '' };
const MAX_NAME = 100;
const MAX_CONTACT = 200;
const MAX_MESSAGE = 5000;
type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ webhookUrl }: ContactFormProps) {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!webhookUrl.trim()) {
        setErrorMessage('Форма не настроена: не указан вебхук.');
        setStatus('error');
        return;
      }
      if (!form.consent) {
        setErrorMessage('Нужно согласие на обработку данных.');
        setStatus('error');
        return;
      }
      if (form.hp) {
        return;
      }
      setStatus('sending');
      setErrorMessage('');
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            contact: form.contact.trim(),
            message: form.message.trim(),
          }),
        });
        if (!res.ok) throw new Error(`Ошибка ${res.status}`);
        setStatus('success');
        setForm(INITIAL);
      } catch (err) {
        setStatus('error');
        setErrorMessage(err instanceof Error ? err.message : 'Не удалось отправить.');
      }
    },
    [webhookUrl, form.name, form.contact, form.message, form.consent, form.hp]
  );

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <input
        type="text"
        name="hp"
        value={form.hp}
        onChange={(e) => setForm((p) => ({ ...p, hp: e.target.value }))}
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Имя
        </label>
        <input
          id="contact-name"
          type="text"
          required
          maxLength={MAX_NAME}
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value.slice(0, MAX_NAME) }))}
          className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100"
          disabled={status === 'sending'}
        />
      </div>
      <div>
        <label htmlFor="contact-contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email или Telegram
        </label>
        <input
          id="contact-contact"
          type="text"
          required
          maxLength={MAX_CONTACT}
          value={form.contact}
          onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value.slice(0, MAX_CONTACT) }))}
          className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100"
          disabled={status === 'sending'}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Сообщение
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          maxLength={MAX_MESSAGE}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value.slice(0, MAX_MESSAGE) }))}
          className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100"
          disabled={status === 'sending'}
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="contact-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
          disabled={status === 'sending'}
          className="mt-1 rounded border-gray-300"
        />
        <label htmlFor="contact-consent" className="text-sm text-gray-600 dark:text-gray-400">
          Согласен на обработку указанных данных для ответа.
        </label>
      </div>
      {status === 'error' && errorMessage && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
      {status === 'success' && (
        <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
          Сообщение отправлено. Отвечу в течение дня.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 disabled:opacity-50"
      >
        {status === 'sending' ? 'Отправка…' : 'Отправить'}
      </button>
    </form>
  );
}
