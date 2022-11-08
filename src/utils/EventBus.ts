export class EventBus {
  private readonly listeners: Record<
    string,
    Array<(...args: unknown[]) => void>
  > = {};

  on(event: string, callback: () => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

<<<<<<< HEAD
    this.listeners[event].push(callback);
=======
    this.listeners[event]?.push(callback);
>>>>>>> origin/sprint_3
  }

  off(event: string, callback: () => void): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
<<<<<<< HEAD
      throw new Error(`Нет события: ${event}`);
=======
      return;
>>>>>>> origin/sprint_3
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
