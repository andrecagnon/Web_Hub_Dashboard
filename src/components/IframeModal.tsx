import { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, RefreshCw, AlertTriangle, Maximize2 } from 'lucide-react';
import { Dashboard } from '@/types';

interface IframeModalProps {
  dashboard: Dashboard | null;
  onClose: () => void;
}

export default function IframeModal({ dashboard, onClose }: IframeModalProps) {
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (dashboard) {
      setLoading(true);
      setBlocked(false);
      setKey((k) => k + 1);
    }
  }, [dashboard]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Detect X-Frame-Options block via load timeout
  useEffect(() => {
    if (!dashboard) return;
    const timeout = setTimeout(() => {
      if (loading) {
        setBlocked(true);
        setLoading(false);
      }
    }, 8000);
    return () => clearTimeout(timeout);
  }, [dashboard, loading, key]);

  const handleLoad = () => {
    setLoading(false);
    try {
      const doc = iframeRef.current?.contentDocument;
      if (doc && doc.body?.innerHTML === '') {
        setBlocked(true);
      }
    } catch {
      // Para URLs externas (cross-origin), o navegador bloqueia a leitura do contentDocument e cai aqui.
      // Assumimos que o iframe carregou corretamente e NÃO marcamos como bloqueado.
    }
  };

  const handleError = () => {
    setLoading(false);
    setBlocked(true);
  };

  const handleRefresh = () => {
    setLoading(true);
    setBlocked(false);
    setKey((k) => k + 1);
  };

  if (!dashboard) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm animate-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-[96vw] max-w-[1800px] h-[96vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F2F2F2] shrink-0">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold text-gray-900">{dashboard.name}</h2>
            {dashboard.description && (
              <p className="text-xs text-gray-400 mt-0.5">{dashboard.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              title="Recarregar"
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-150"
            >
              <RefreshCw size={15} />
            </button>
            <a
              href={dashboard.shareUrl || dashboard.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir em nova aba"
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-150"
            >
              <Maximize2 size={15} />
            </a>
            <button
              onClick={onClose}
              title="Fechar"
              className="p-2 rounded-lg text-gray-400 hover:text-[#BF1B1B] hover:bg-[#D97373]/10 transition-colors duration-150"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 relative overflow-hidden bg-[#F2F2F2]">
          {loading && !blocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#F2F2F2] z-10">
              <div className="w-8 h-8 border-2 border-[#F29F05] border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-gray-400">Carregando dashboard...</p>
            </div>
          )}

          {blocked ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#F2C572]/20 flex items-center justify-center">
                <AlertTriangle size={24} className="text-[#BF1B1B]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">Visualização bloqueada</h3>
                <p className="text-sm text-gray-400 max-w-sm">
                  Este dashboard não permite incorporação direta por políticas de segurança (X-Frame-Options). Abra-o em uma nova aba para visualizar.
                </p>
              </div>
              <a
                href={dashboard.shareUrl || dashboard.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#F29F05] hover:bg-[#d98e04] text-white text-sm font-medium rounded-lg transition-colors duration-150 shadow-sm"
              >
                <ExternalLink size={15} />
                Abrir em nova aba
              </a>
            </div>
          ) : (
            <iframe
              key={key}
              ref={iframeRef}
              src={dashboard.contentUrl || dashboard.url}
              title={dashboard.name}
              className="w-full h-full border-0"
              onLoad={handleLoad}
              onError={handleError}
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          )}
        </div>
      </div>
    </div>
  );
}
