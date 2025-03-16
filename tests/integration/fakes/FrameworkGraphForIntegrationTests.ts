import { Window } from '../../../src/framework/Window';
import { FrameworkGraph } from '../../../src/framework/di/FrameworkGraph';
import { Graph, Provides, Singleton } from 'react-obsidian';
import { FakeWindow } from './FakeWindow';
import { FakeDocument } from './FakeDocument';
import { Document } from '../../../src/framework/Document';

@Singleton() @Graph()
export class FrameworkGraphForIntegrationTests extends FrameworkGraph {
  @Provides()
  override window() {
    return new FakeWindow() as Window;
  }

  @Provides()
  override document(): Document {
    return new FakeDocument();
  }
}
