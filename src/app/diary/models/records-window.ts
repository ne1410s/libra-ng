export interface RecordsWindow {
  title: string;
  mode: 'week' | 'month' | 'year' | 'custom';
  start: Date;
  end: Date;
}