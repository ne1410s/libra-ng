export interface RecordsWindow {
  title: string;
  mode: 'week' | 'month' | 'year' | 'custom';
  offset: number;
  start: Date;
  end: Date;
}