interface eventFunc {
  (event: string, callback: () => void): void;
}

export class EventBus {
  listeners: Record<string, (() => void)[]>;
  constructor() {
    this.listeners = {};
  }

  on: eventFunc = function (event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  };

  off: eventFunc = function (event, callback) {
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
    this.listeners[event].forEach(function (
      listener: (...args: unknown[]) => void
    ) {
      listener(...args);
    });
  }
}
