import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { Window } from '../Window';
import { type Document } from '../Document';

@Singleton()
@Graph()
export class FrameworkGraph extends ObjectGraph {
  @Provides()
  window(): Window {
    return new Window(window);
  }

  @Provides()
  document(): Document {
    return document;
  }
}
