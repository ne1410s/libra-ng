export interface CalorieRecord {
  id: number;
  recorded: Date;
  burn: boolean;
  summary: string;
  intensity: number;
  amount: number;
  calories: number;
}