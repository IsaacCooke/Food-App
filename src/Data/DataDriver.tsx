import * as SQLite from 'expo-sqlite';
import {getDate} from "./Helpers";

const db = SQLite.openDatabase('db.db');

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists days (date text PRIMARY KEY, breakfast integer, lunch integer, dinner integer, morning_snack integer, afternoon_snack integer, evening_snack integer);'
    );
    tx.executeSql(
      'create table if not exists challenge (id integer PRIMARY KEY, challenge TEXT);',
    );
  });
}

export const getChallenge = (callback: (challenge: any) => void) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from challenge order by id desc limit 1', [], (_, { rows }) => {
        callback(rows._array);
      });
    }
  )
}

export const addChallenge = (challenge: string) => {
  db.transaction(
    tx => {
      tx.executeSql('INSERT OR REPLACE INTO challenge (id, challenge) VALUES (1, ?);',
        [challenge]);
    }
  );
}

export const resetDay = () => {
  db.transaction(tx => {
    tx.executeSql('INSERT OR REPLACE INTO days (date, breakfast, lunch, dinner, morning_snack, afternoon_snack, evening_snack) VALUES (?, 0, 0, 0, 0, 0, 0);',
      [getDate()]);
    }
  )
}

export const logDay = (date: string, breakfast: number, lunch: number, dinner: number, morning_snack: number, afternoon_snack: number, evening_snack: number) => {
  db.transaction(
    tx => {
      tx.executeSql('INSERT OR REPLACE INTO days (date, breakfast, lunch, dinner, morning_snack, afternoon_snack, evening_snack) VALUES (?, ?, ?, ?, ?, ?, ?);',
        [date, breakfast, lunch, dinner, morning_snack, afternoon_snack, evening_snack]);
    }
  );
}

export const getDay = (date: string, callback: (day: any) => void) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from days where date = ?', [date], (_, { rows }) => {
        callback(rows._array);
      });
    }
  )
}

export const getWeek = (callback: (days: any) => void) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from days order by date desc limit 7', [], (_, { rows }) => {
        callback(rows._array);
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

export const updateBreakfast = (date: string, breakfast: number) => {
  db.transaction(
    tx => {
      tx.executeSql('update days set breakfast = ? where date = ?', [breakfast, date]);
    }
  );
}

export const updateLunch = (date: string, lunch: number) => {
  db.transaction(
    tx => {
      tx.executeSql('update days set lunch = ? where date = ?', [lunch, date]);
    }
  );
}

export const updateDinner = (date: string, dinner: number) => {
  db.transaction(
    tx => {
      tx.executeSql('update days set dinner = ? where date = ?', [dinner, date]);
    }
  );
}

export const updateMorningSnack = (date: string, morning_snack: number) => {
  db.transaction(
    tx => {
      tx.executeSql('update days set morning_snack = ? where date = ?', [morning_snack, date]);
    }
  );
}

export const updateAfternoonSnack = (date: string, afternoon_snack: number) => {
  db.transaction(
    tx => {
      tx.executeSql('update days set afternoon_snack = ? where date = ?', [afternoon_snack, date]);
    }
  );
}

export const updateEveningSnack = (date: string, evening_snack: number) => {
  db.transaction(
    tx => {
      tx.executeSql('update days set evening_snack = ? where date = ?', [evening_snack, date]);
    }
  );
}

export const resetDatabase = () => {
  db.transaction(
    tx => {
      tx.executeSql('drop table days;');
      tx.executeSql('drop table challenge;')
    }
  )
  initDatabase();
}

export const initChallenge = () => {
  db.transaction(tx => {
    tx.executeSql(
      'drop table challenge;',
    );
  })
}