import { Window } from '../../../src/framework/Window';
import { FrameworkGraph } from '../../../src/framework/di/FrameworkGraph';
import { graph, provides, singleton } from 'react-obsidian';
import { FakeWindow } from './FakeWindow';
import { FakeDocument } from './FakeDocument';
import { Document } from '../../../src/framework/Document';

@singleton() @graph()
export class FrameworkGraphForIntegrationTests extends FrameworkGraph {
  @provides()
  override window() {
    return new FakeWindow() as Window;
  }

  @provides()
  override document(): Document {
    return new FakeDocument();
  }
}
