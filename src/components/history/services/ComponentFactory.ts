import { type ComponentFactory } from '../../utils/ComponentFactory';
import { throws } from '../../../utils/throws';
import { Entry } from '../Entry';

type ComponentType = 'entry';

export class EntryFactory implements ComponentFactory<ComponentType, typeof Entry> {
  public create(type: ComponentType) {
    return type === 'entry' ? Entry : throws(`Unknown component type: ${type}`);
  }
}
