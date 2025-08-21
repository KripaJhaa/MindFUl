interface Booking {
  id?: number;
  name: string;
  email: string;
  phone: string;
  dateTime: Date;
  concerns?: string;
  preferredMode: 'video' | 'chat';
  counselorId?: string;
  createdAt?: string;
}

class LocalStorageDB {
  private storageKey = 'mindyou_bookings';

  async createBooking(booking: Omit<Booking, 'id' | 'createdAt'>) {
    const bookings = this.getAllBookings();
    const newBooking = {
      ...booking,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    localStorage.setItem(this.storageKey, JSON.stringify(bookings));
    return newBooking;
  }

  private getAllBookings(): Booking[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
}

// Development-only imports
let SQLiteDB: any = null;
if (process.env.NODE_ENV === 'development') {
  const sqlite3 = require('sqlite3');
  const { open } = require('sqlite');
  
  SQLiteDB = class {
    private db: any = null;

    async init() {
      if (this.db) return;

      this.db = await open({
        filename: './bookings.db',
        driver: sqlite3.Database
      });

      await this.db.exec(`
        CREATE TABLE IF NOT EXISTS bookings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT NOT NULL,
          dateTime TEXT NOT NULL,
          concerns TEXT,
          preferredMode TEXT NOT NULL,
          counselorId TEXT,
          createdAt TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `);
    }

    async createBooking(booking: Omit<Booking, 'id' | 'createdAt'>) {
      await this.init();
      return this.db.run(`
        INSERT INTO bookings (name, email, phone, dateTime, concerns, preferredMode, counselorId)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [
        booking.name,
        booking.email,
        booking.phone,
        booking.dateTime.toISOString(),
        booking.concerns,
        booking.preferredMode,
        booking.counselorId
      ]);
    }
  };
}

// Use LocalStorageDB in production (GitHub Pages) and SQLiteDB in development
const db = process.env.NODE_ENV === 'production' 
  ? new LocalStorageDB()
  : new (SQLiteDB as any)();

export const createBooking = (booking: Omit<Booking, 'id' | 'createdAt'>) => {
  return db.createBooking(booking);
};
