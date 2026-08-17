import { Activity, Wrench, Briefcase } from 'lucide-react';
import { Dashboard } from '@/types';
import DashboardCard from './DashboardCard';

interface DashboardGroupProps {
  groupId: string;
  groupName: string;
  dashboards: Dashboard[];
  onView: (dashboard: Dashboard) => void;
}

const groupIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  aniel: Activity,
  b2b: Briefcase,
  apoio: Wrench,
};

const groupIconColorMap: Record<string, string> = {
  aniel: 'text-[#10B981] bg-[#10B981]/20',
  b2b: 'text-[#3B82F6] bg-[#3B82F6]/20',
  apoio: 'text-[#BF1B1B] bg-[#D97373]/30',
};

export default function DashboardGroup({ groupId, groupName, dashboards, onView }: DashboardGroupProps) {
  const Icon = groupIconMap[groupId] ?? Activity;
  const iconColor = groupIconColorMap[groupId] ?? 'text-[#10B981] bg-[#10B981]/20';

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconColor}`}>
          <Icon size={18} />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">{groupName}</h2>
          <p className="text-xs text-gray-400">
            {dashboards.length} {dashboards.length === 1 ? 'dashboard' : 'dashboards'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dashboards.map((dashboard) => (
          <DashboardCard key={dashboard.id} dashboard={dashboard} onView={onView} />
        ))}
      </div>
    </section>
  );
}
