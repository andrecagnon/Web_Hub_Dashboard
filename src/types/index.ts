export interface Dashboard {
  id: string;
  name: string;
  url: string; // fallback
  contentUrl?: string; // Link para inserir conteúdo
  shareUrl?: string; // Link Compartilhamento
  group: string;
  description?: string;
}

export interface Group {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}
