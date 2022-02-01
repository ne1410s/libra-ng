import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CalorieRecord } from 'src/app/diary/models/calorie-record';
import { WeightRecord } from 'src/app/diary/models/weight-record';

export class LibraInMemoryDb implements InMemoryDbService {
  
  createDb() {
    const diary_kgs: WeightRecord[] = [
      {
        id: 1,
        recorded: new Date('2022-01-15 08:45:00'),
        amount: 100,
      },
      {
        id: 2,
        recorded: new Date('2022-01-16 08:20:00'),
        amount: 99.7,
      },
    ];
    const diary_cals: CalorieRecord[] = [
      {
        id: 1,
        recorded: new Date('2022-01-15 07:10:00'),
        burn: false,
        summary: 'Cornflakes',
        intensity: 2.023,
        amount: 200,
        calories: 405,
      },
      {
        id: 2,
        recorded: new Date('2022-01-15 12:20:00'),
        burn: true,
        summary: 'Running',
        intensity: 30,
        amount: 20,
        calories: 600,
      },
    ];

    return {
      diary_kgs,
      diary_cals,
    };
  }
}