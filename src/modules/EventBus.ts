interface eventFunc {
  (event: string, callback: () => void): void;
}

export class EventBus {
  listeners: Record<string, (() => void)[]>;

  constructor() {
    this.listeners = {};
  }

  on: eventFunc = (event, callback) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  };

  off: eventFunc = (event, callback) => {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: () => void) => listener !== callback
    );
  };

  emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach((listener: (...args: unknown[]) => void) => {
      listener(...args);
    });
  }
}
