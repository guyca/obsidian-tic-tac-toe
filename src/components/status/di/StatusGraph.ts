import { Graph, LifecycleBound, ObjectGraph, Provides } from "react-obsidian";
import { GameGraph } from "../../../core/di/GameGraph";
import { useStatusViewModel } from "../model/statusViewModel";
import { GameModel } from "../../../core/model/GameModel";

@LifecycleBound() @Graph({subgraphs: [GameGraph]})
export class StatusGraph extends ObjectGraph {
  @Provides()  
  useViewModel(model: GameModel) {
    return () => useStatusViewModel(model);
  }
}