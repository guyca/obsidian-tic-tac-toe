import { Graph, ObjectGraph, Provides } from "react-obsidian";
import { useEntryViewModel } from "../model/entryViewModel";
import { GameGraph } from "../../../core/di/GameGraph";
import { Props } from "../Entry";
import { GameModel } from "../../../core/model/GameModel";

@Graph({subgraphs: [GameGraph]})
export class EntryGraph extends ObjectGraph {
  private index: number;

  constructor(props: Props) {
    super(props);
    this.index = props.index;
  }

  @Provides()
  useViewModel(model: GameModel) {
    return () => useEntryViewModel(this.index, model);
  }
}