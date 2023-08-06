import { Window } from '../../../src/framework/Window';
import type { FrameworkGraph } from '../../../src/framework/di/FrameworkGraph';
import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { FakeWindow } from './FakeWindow';
import { FakeDocument } from './FakeDocument';
import { Document } from '../../../src/framework/Document';

@Singleton()
@Graph()
export class FrameworkGraphForIntegrationTests
  extends ObjectGraph
  implements FrameworkGraph
{
  @Provides()
  window(): Window {
    return new FakeWindow();
  }

  @Provides()
  document(): Document {
    return new FakeDocument();
  }
}
