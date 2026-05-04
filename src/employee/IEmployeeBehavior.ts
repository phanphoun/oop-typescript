/**
 * INTERFACE - IEmployeeBehavior
 * 
 * This interface defines behaviors that employees can have.
 * Unlike abstract classes, interfaces cannot have implementation.
 * Multiple interfaces can be implemented by a single class.
 */
export interface IEmployeeBehavior {
  work(): void;
  takeBreak(minutes: number): void;
}
