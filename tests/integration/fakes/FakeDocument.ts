import type { Document } from '../../../src/framework/Document';

export class FakeDocument implements Document {
  public get body(): HTMLElement {
    return {} as HTMLElement;
  }
}
