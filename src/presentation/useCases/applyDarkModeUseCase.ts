import type { Document } from '../../framework/Document';
import type { ColorScheme } from '../types';

export class ApplyDarkModeUseCase {
  constructor(private readonly document: Document) {}

  execute(colorScheme: ColorScheme) {
    if (colorScheme === 'no-preference') return;
    this.document.body.classList.add(colorScheme);
    this.document.body.classList.remove(
      colorScheme === 'light' ? 'dark' : 'light',
    );
  }
}
