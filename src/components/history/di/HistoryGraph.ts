import { Graph, LifecycleBound, ObjectGraph, Provides } from "react-obsidian";
import { GameModel } from "../../../core/model/GameModel";
import { useHistoryViewModel } from "../model/historyViewModel";
import { GameGraph } from "../../../core/di/GameGraph";

@LifecycleBound() @Graph({subgraphs: [GameGraph]})
export class HistoryGraph extends ObjectGraph {
  @Provides()
  useViewModel(model: GameModel) {
    return () => useHistoryViewModel(model);
  }
}