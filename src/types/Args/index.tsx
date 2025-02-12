export type CreateTechStackArgs = {
  id?: string;
  icon: string;
  name: string;
  category: string;
  icon_color: string;
};

export type PaginationParams = {
  page: number;
  limit: number;
  search?: string;
  category?: string;
};
