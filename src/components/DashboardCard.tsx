import { Eye, ExternalLink } from 'lucide-react';
import { Dashboard } from '@/types';

interface DashboardCardProps {
  dashboard: Dashboard;
  onView: (dashboard: Dashboard) => void;
}

const groupPreviewBg: Record<string, string> = {
  aniel: 'bg-[#10B981]/20 border-[#10B981]/20',
  b2b: 'bg-[#3B82F6]/20 border-[#3B82F6]/20',
  apoio: 'bg-[#D97373]/20 border-[#BF1B1B]/20',
};

// Power BI SVG icon
function PowerBIIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="10" width="6" height="18" rx="1.5" fill="#F2C572" />
      <rect x="10" y="6" width="6" height="22" rx="1.5" fill="#F29F05" />
      <rect x="18" y="2" width="6" height="26" rx="1.5" fill="#BF1B1B" />
      <rect x="26" y="14" width="4" height="14" rx="1" fill="#D97373" />
    </svg>
  );
}

export default function DashboardCard({ dashboard, onView }: DashboardCardProps) {
  const previewBg = groupPreviewBg[dashboard.group] ?? groupPreviewBg['aniel'];

  return (
    <div className="bg-white rounded-xl border border-[#F2F2F2] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col overflow-hidden">
      {/* Preview area — no label text, just the Power BI icon */}
      <div className={`${previewBg} border-b h-[112px] flex items-center justify-center`}>
        <PowerBIIcon className="w-12 h-12" />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">{dashboard.name}</h3>
        {dashboard.description && (
          <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2">{dashboard.description}</p>
        )}

        <div className="flex items-center gap-1 mt-auto">
          <button
            onClick={() => onView(dashboard)}
            className="flex-1 flex items-center justify-center gap-1 px-1 py-1.5 bg-[#F29F05] hover:bg-[#d98e04] active:bg-[#c07d03] text-white text-[11px] sm:text-xs font-medium rounded-lg transition-colors duration-150 shadow-sm whitespace-nowrap"
          >
            <Eye size={14} className="shrink-0" />
            <span>Visualizar</span>
          </button>
          <a
            href={dashboard.shareUrl || dashboard.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 px-1 py-1.5 text-gray-500 hover:text-[#BF1B1B] text-[11px] sm:text-xs font-medium rounded-lg border border-[#F2F2F2] hover:border-[#D97373] hover:bg-[#D97373]/5 transition-all duration-150 whitespace-nowrap"
          >
            <ExternalLink size={14} className="shrink-0" />
            <span>Nova aba</span>
          </a>
        </div>
      </div>
    </div>
  );
}
