import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import DashboardGroup from '@/components/DashboardGroup';
import IframeModal from '@/components/IframeModal';
import { dashboards, groups } from '@/data/dashboards';
import { Dashboard } from '@/types';

export default function App() {
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Dashboard | null>(null);

  const filteredDashboards = useMemo(() => {
    return dashboards.filter((d) => {
      const matchesGroup = activeGroup === 'all' || d.group === activeGroup;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === '' ||
        d.name.toLowerCase().includes(q) ||
        d.description?.toLowerCase().includes(q);
      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  const visibleGroups = useMemo(() => {
    return groups
      .filter((g) => activeGroup === 'all' || g.id === activeGroup)
      .map((g) => ({
        ...g,
        items: filteredDashboards.filter((d) => d.group === g.id),
      }))
      .filter((g) => g.items.length > 0);
  }, [activeGroup, filteredDashboards]);

  return (
    <div className="flex min-h-screen bg-[#F2F2F2]">
      <Sidebar
        activeGroup={activeGroup}
        onSelectGroup={setActiveGroup}
        totalCount={dashboards.length}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[#F2F2F2] px-8 py-5 flex items-center justify-between gap-6 shrink-0">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {activeGroup === 'all'
                ? 'Todos os Dashboards'
                : groups.find((g) => g.id === activeGroup)?.name ?? 'Dashboards'}
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              {filteredDashboards.length} de {dashboards.length} disponíveis
            </p>
          </div>

          <div className="relative w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar dashboard..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-[#F2F2F2] border border-[#F2C572]/40 rounded-lg text-gray-700 placeholder-gray-400 focus:bg-white focus:border-[#F29F05] focus:ring-2 focus:ring-[#F29F05]/20 outline-none transition-all duration-150"
            />
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {visibleGroups.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 border border-[#F2F2F2]">
                <Search size={22} className="text-[#F2C572]" />
              </div>
              <h3 className="text-base font-semibold text-gray-700">Nenhum dashboard encontrado</h3>
              <p className="text-sm text-gray-400 mt-1">Tente outro termo de busca ou grupo.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {visibleGroups.map((g) => (
                <DashboardGroup
                  key={g.id}
                  groupId={g.id}
                  groupName={g.name}
                  dashboards={g.items}
                  onView={setSelected}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <IframeModal dashboard={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
