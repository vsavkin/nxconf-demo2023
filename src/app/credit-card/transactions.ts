import { TransactionData } from '../design-system/transaction/transaction';

const Day = 1000 * 60 * 60 * 24;

export const transactions: TransactionData[] = [
  {
    id: 0,
    date: new Date(Date.now() - Day * 2),
    amount: -10,
  },
  {
    id: 1,
    date: new Date(Date.now() - Day * 3),
    amount: -150,
  },
  {
    id: 2,
    date: new Date(Date.now() - Day * 4),
    amount: -50,
  },
];
