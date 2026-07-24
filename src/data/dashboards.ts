import { Dashboard, Group } from '@/types';

export const dashboards: Dashboard[] = [
  // Monitoramento
  {
    id: 'b2b-helix',
    name: 'B2B Helix',
    url: 'https://app.powerbi.com/reportEmbed?reportId=2e1a8b49-0bbc-4fa9-a3a9-4645f5804db7&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=2e1a8b49-0bbc-4fa9-a3a9-4645f5804db7&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/qWftYpVse_?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'monitoramento',
    description: 'Monitoramento de clientes B2B via plataforma Helix',
  },
  {
    id: 'fca-acessos',
    name: 'FCA - Acessos',
    url: 'https://app.powerbi.com/reportEmbed?reportId=d3d498e2-fa7a-4ae8-bd5b-f231d449e3fa&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=d3d498e2-fa7a-4ae8-bd5b-f231d449e3fa&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/9Jly1VCMam?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'monitoramento',
    description: 'Controle e análise de acessos FCA',
  },
  {
    id: 'ligacoes-b2b',
    name: 'Ligações B2B',
    url: 'https://app.powerbi.com/reportEmbed?reportId=8f2221e3-b863-45a2-9cd3-70d2cf565790&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=8f2221e3-b863-45a2-9cd3-70d2cf565790&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/ZC0go6wFbt?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'monitoramento',
    description: 'Volume e qualidade de ligações B2B',
  },
  {
    id: 'monitoramento-nmc',
    name: 'Monitoramento NMC',
    url: 'https://app.powerbi.com/reportEmbed?reportId=ffb4d4f4-8638-4a88-a2fd-bcfa58989a80&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    contentUrl: 'https://app.powerbi.com/reportEmbed?reportId=ffb4d4f4-8638-4a88-a2fd-bcfa58989a80&autoAuth=true&ctid=50346803-3299-4314-bb54-e86716cc07b3',
    shareUrl: 'https://app.powerbi.com/links/TXzwOVgsmQ?ctid=50346803-3299-4314-bb54-e86716cc07b3&pbi_source=linkShare',
    group: 'monitoramento',
    description: 'Painel de monitoramento do NMC em tempo real',
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
    id: 'monitoramento',
    name: 'Monitoramento',
    icon: 'Activity',
    color: 'amber',
    count: dashboards.filter((d) => d.group === 'monitoramento').length,
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
  monitoramento: {
    text: 'text-[#F29F05]',
    iconBg: 'bg-[#F2C572]/30',
  },
  apoio: {
    text: 'text-[#BF1B1B]',
    iconBg: 'bg-[#D97373]/30',
  },
};
