import { Student } from './student.interface';
import { SearchFilters } from './search-filters.interface';

export interface StudentsState {
  students: Student[];
  isLoading: boolean;
  filters: SearchFilters;
  error: string;
}
