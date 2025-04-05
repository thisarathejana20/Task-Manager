export interface PageResponse<T> {
  content: T[]; // The list of items (content)
  number: number; // Current page number (starting from 0)
  size: number; // Number of items per page
  totalElements: number; // Total number of items across all pages
  totalPages: number; // Total number of pages
  first: boolean; // Indicates if it's the first page
  last: boolean; // Indicates if it's the last page
}
