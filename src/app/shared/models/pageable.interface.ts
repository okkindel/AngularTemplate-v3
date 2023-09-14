export interface Pageable<T> {
  totalObjects: number;
  totalPages: number;
  data: T;
}

export interface PageableRequest {
  pageSize: number;
  page: number;
}
