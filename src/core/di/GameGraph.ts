import { graph, ObjectGraph, provides, singleton } from 'react-obsidian';
import { GameModel } from '../model/GameModel';
import { CalculateWinnerUseCase } from '../usecases/CalculateWinnerUseCase';

@singleton() @graph()
export class GameGraph extends ObjectGraph {
  @provides()
  model(): GameModel {
    return new GameModel(new CalculateWinnerUseCase());
  }
}
