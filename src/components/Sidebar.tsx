import { Activity, LayoutDashboard, Wrench, Briefcase } from 'lucide-react';
import { groups } from '@/data/dashboards';
import { Group } from '@/types';

interface SidebarProps {
  activeGroup: string;
  onSelectGroup: (id: string) => void;
  totalCount: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Activity,
  Wrench,
  Briefcase,
};

const colorActiveMap: Record<string, string> = {
  aniel: 'border-[#10B981]/40',
  b2b: 'border-[#3B82F6]/40',
  apoio: 'border-[#D97373]/40',
};

const colorActiveBg: Record<string, string> = {
  aniel: 'bg-[#10B981]/10 text-[#10B981]',
  b2b: 'bg-[#3B82F6]/10 text-[#3B82F6]',
  apoio: 'bg-[#BF1B1B]/10 text-[#BF1B1B]',
};

const colorDotMap: Record<string, string> = {
  aniel: 'bg-[#10B981]',
  b2b: 'bg-[#3B82F6]',
  apoio: 'bg-[#BF1B1B]',
};

export default function Sidebar({ activeGroup, onSelectGroup, totalCount }: SidebarProps) {
  return (
    <aside className="w-60 min-h-screen bg-white border-r border-[#F2F2F2] flex flex-col py-6 px-4 shrink-0">
      {/* Logo */}
      <div className="mb-8 px-1">
        <div className="flex items-center gap-2.5">
          <img
            src="/images/Logo_Desktop-removebg-preview.png"
            alt="Logo"
            className="h-10 w-auto object-contain shrink-0"
          />
          <span className="text-base font-bold text-gray-900 leading-tight">Dashboard Hub</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">Central de relatórios</p>
      </div>

      {/* Groups label */}
      <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2 px-1">Grupos</p>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {/* All */}
        <button
          onClick={() => onSelectGroup('all')}
          className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 border ${
            activeGroup === 'all'
              ? 'bg-[#F29F05] text-white border-[#F29F05] shadow-sm'
              : 'text-gray-600 border-transparent hover:bg-[#F2F2F2] hover:text-gray-900'
          }`}
        >
          <span className="flex items-center gap-2.5">
            <LayoutDashboard size={15} />
            Todos
          </span>
          <span
            className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
              activeGroup === 'all' ? 'bg-white/20 text-white' : 'bg-[#F2F2F2] text-gray-500'
            }`}
          >
            {totalCount}
          </span>
        </button>

        {/* Per group */}
        {groups.map((group: Group) => {
          const Icon = iconMap[group.icon];
          const isActive = activeGroup === group.id;
          return (
            <button
              key={group.id}
              onClick={() => onSelectGroup(group.id)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 border ${
                isActive
                  ? `${colorActiveBg[group.id]} ${colorActiveMap[group.id]}`
                  : 'text-gray-600 border-transparent hover:bg-[#F2F2F2] hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2.5">
                {Icon && <Icon size={15} />}
                {group.name}
              </span>
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/60' : 'bg-[#F2F2F2] text-gray-500'
                }`}
              >
                {group.count}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-[#F2F2F2]">
        <div className="flex flex-col gap-1.5">
          {groups.map((group: Group) => (
            <div key={group.id} className="flex items-center gap-2 px-1">
              <span className={`w-2 h-2 rounded-full ${colorDotMap[group.id]}`} />
              <span className="text-xs text-gray-400">{group.name}</span>
              <span className="ml-auto text-xs font-medium text-gray-500">{group.count}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
