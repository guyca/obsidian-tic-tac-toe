import { graph, ObjectGraph, provides, singleton } from 'react-obsidian';
import { Window } from '../Window';
import { type Document } from '../Document';

@singleton() @graph()
export class FrameworkGraph extends ObjectGraph {
  @provides()
  window(): Window {
    return new Window(window);
  }

  @provides()
  document(): Document {
    return document;
  }
}
