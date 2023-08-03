import { Entry } from '../../../../../src/components/history/Entry';
import { EntryFactory } from '../../../../../src/components/history/services/ComponentFactory';

describe('ComponentFactory', () => {
  it('should return Entry component when type is entry', () => {
    const factory = new EntryFactory();
    const component = factory.create('entry');
    expect(component).toBe(Entry);
  });
});
