import { ComponentFactory } from "../../../common/ComponentFactory";
import { throws } from "../../../utils/throws";
import { Entry } from "../Entry";

type ComponentType = 'entry';

export class EntryFactory implements ComponentFactory<ComponentType>{
  public create(type: ComponentType) {
    return type === 'entry' ? Entry : throws(`Unknown component type: ${type}`);
  }
}