import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

const db = SQLite.openDatabase('db.db');

export function openDatabase() {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => { },
        };
      },
    };
  }

  return SQLite.openDatabase('db.db');
}

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists days (id integer primary key not null, date text, breakfast integer, lunch integer, dinner integer, morning_snack integer, afternoon_snack integer, evening_snack integer);'
    );
    tx.executeSql('INSERT INTO days (date, breakfast, lunch, dinner, evening_snack, morning_snack, afternoon_snack)\n VALUES (\'10-04-2023\', 5, 2, 5, 2, 1, 3);\n');
  });
}

export const logDay = (date: string, breakfast: number, lunch: number, dinner: number, morning_snack: number, afternoon_snack: number, evening_snack: number) => {
  db.transaction(
    tx => {
      tx.executeSql('insert into days (date, breakfast, lunch, dinner, morning_snack, afternoon_snack, evening_snack) values (?, ?, ?, ?, ?, ?, ?)',
        [date, breakfast, lunch, dinner, morning_snack, afternoon_snack, evening_snack]);
    }
  );
}

export const logMeal = (meal: string, date: string, rating: number) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from days where date = ?', [date], (_, { rows }) => {
        if (rows.length > 0) {
          tx.executeSql('update days set ' + meal + ' = ? where date = ?', [rating, date]);
        } else {
          tx.executeSql('insert into days (date, ' + meal + ') values (?, ?)', [date, rating]);
        }
      });
    }
  )
}

export const getDay = (date: string, callback: (day: any) => void) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from days where date = ?', [date], (_, { rows }) => {
        console.log(rows._array[0])
        callback(rows._array[0]);
      });
    }
  )
}

export const getDays = (callback: (days: any) => void) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from days', [], (_, { rows }) => {
        callback(rows._array);
      });
    }
  )
}