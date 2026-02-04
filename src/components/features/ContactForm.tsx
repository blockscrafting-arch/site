import { useState, useCallback } from 'react';

interface Props {
  webhookUrl: string;
}

export default function ContactForm({ webhookUrl }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!webhookUrl || status === 'sending') return;
      const form = e.currentTarget;
      const data = new FormData(form);
      setStatus('sending');
      setMessage('');
      try {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          body: JSON.stringify({
            name: data.get('name'),
            contact: data.get('contact'),
            text: data.get('text'),
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (res.ok) {
          setStatus('ok');
          setMessage('Сообщение отправлено. Отвечу в течение дня.');
          form.reset();
        } else {
          setStatus('error');
          setMessage('Ошибка отправки. Напишите в Telegram.');
        }
      } catch {
        setStatus('error');
        setMessage('Ошибка отправки. Напишите в Telegram.');
      }
    },
    [webhookUrl, status]
  );

  if (!webhookUrl) {
    return (
      <p className="text-gray-600 dark:text-gray-400">
        Форма отключена. Напишите в Telegram: <a href="https://t.me/goutach" class="text-emerald-600 dark:text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">@goutach</a>.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Имя
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      <div>
        <label htmlFor="contact-contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Telegram или email
        </label>
        <input
          id="contact-contact"
          name="contact"
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      <div>
        <label htmlFor="contact-text" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Сообщение
        </label>
        <textarea
          id="contact-text"
          name="text"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {status === 'sending' ? 'Отправка…' : 'Отправить'}
      </button>
      {message && (
        <p className={status === 'ok' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}>
          {message}
        </p>
      )}
    </form>
  );
}
