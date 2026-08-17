import { Dashboard, Group } from '@/types';

export const dashboards: Dashboard[] = [
  // B2B
  {
    id: 'b2b',
    name: 'B2B',
    url: 'https://app.powerbi.com/reportEmbed?reportId=2e1a8b49-0bbc-4fa9-a3a9-4645f5804db7&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=2e1a8b49-0bbc-4fa9-a3a9-4645f5804db7&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/qWftYpVse_?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'b2b',
    description: 'Monitoramento e Organização de Incidentes para clientes B2B',
  },
  {
    id: 'fca-acessos',
    name: 'FCA (MELHORIAS E PERFORMANCE)',
    url: 'https://app.powerbi.com/reportEmbed?reportId=d3d498e2-fa7a-4ae8-bd5b-f231d449e3fa&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=d3d498e2-fa7a-4ae8-bd5b-f231d449e3fa&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/9Jly1VCMam?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'b2b',
    description: 'Controle e análise de acessos FCA',
  },
  {
    id: 'ligacoes-b2b',
    name: 'Ligações B2B',
    url: 'https://app.powerbi.com/reportEmbed?reportId=8f2221e3-b863-45a2-9cd3-70d2cf565790&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=8f2221e3-b863-45a2-9cd3-70d2cf565790&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/ZC0go6wFbt?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'b2b',
    description: 'Volume e qualidade de ligações B2B',
  },
  // Aniel
  {
    id: 'monitoramento-aniel',
    name: 'Monitoramento Aniel',
    url: 'https://app.powerbi.com/reportEmbed?reportId=ffb4d4f4-8638-4a88-a2fd-bcfa58989a80&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=ffb4d4f4-8638-4a88-a2fd-bcfa58989a80&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/TXzwOVgsmQ?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'aniel',
    description: 'Painel de monitoramento do Aniel em tempo real',
  },
  {
    id: 'usuarios-aniel',
    name: 'Usuários Aniel',
    url: 'https://app.powerbi.com/reportEmbed?reportId=fe5fcd37-b058-438a-b0d5-6f3b5a83617e&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=fe5fcd37-b058-438a-b0d5-6f3b5a83617e&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/itYgfgd0QW?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'aniel',
    description: 'Gestão e monitoramento de Usuários Aniel',
  },
  {
    id: 'gestao-materiais-aplicados',
    name: 'Gestão de Materiais Aplicados',
    url: 'http://172.30.197.6:3002/',
    contentUrl: 'http://172.30.197.6:3002/',
    shareUrl: 'http://172.30.197.6:3002/',
    group: 'aniel',
    description: 'Painel de Gestão de Materiais Aplicados',
  },
  // Apoio
  {
    id: 'base-de-sites',
    name: 'Base de Sites',
    url: 'https://app.powerbi.com/reportEmbed?reportId=26a35360-9b83-487f-8924-01c1ed106190&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=26a35360-9b83-487f-8924-01c1ed106190&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/GOwr2_Zg97?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'apoio',
    description: 'Inventário e status da base de sites da rede',
  },
  {
    id: 'olt-x-onus',
    name: 'OLT x ONUs',
    url: 'https://app.powerbi.com/reportEmbed?reportId=693d86a7-13bc-4ffb-b8f0-58a6c6c92a84&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=693d86a7-13bc-4ffb-b8f0-58a6c6c92a84&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/Redirect?action=OpenReport&appId=f3ce25f6-a8e3-4236-b01e-ad44b68fc77f&reportObjectId=693d86a7-13bc-4ffb-b8f0-58a6c6c92a84&ctid=50346803-3299-4314-bb54-e86716cc07b3&reportPage=c3b490991b472438a007&pbi_source=appShareLink&portalSessionId=7f67e39f-9e46-4446-bfc5-b4e6d501593a',
    group: 'apoio',
    description: 'Relação entre OLTs e ONUs na infraestrutura',
  },
];

export const groups: Group[] = [
  {
    id: 'aniel',
    name: 'Aniel',
    icon: 'Activity',
    color: 'emerald',
    count: dashboards.filter((d) => d.group === 'aniel').length,
  },
  {
    id: 'b2b',
    name: 'B2B',
    icon: 'Briefcase',
    color: 'blue',
    count: dashboards.filter((d) => d.group === 'b2b').length,
  },
  {
    id: 'apoio',
    name: 'Apoio',
    icon: 'Wrench',
    color: 'red',
    count: dashboards.filter((d) => d.group === 'apoio').length,
  },
];

// kept for DashboardGroup icon colors
export const groupColorMap: Record<string, { text: string; iconBg: string }> = {
  aniel: {
    text: 'text-[#10B981]',
    iconBg: 'bg-[#10B981]/20',
  },
  b2b: {
    text: 'text-[#3B82F6]',
    iconBg: 'bg-[#3B82F6]/20',
  },
  apoio: {
    text: 'text-[#BF1B1B]',
    iconBg: 'bg-[#D97373]/30',
  },
};
