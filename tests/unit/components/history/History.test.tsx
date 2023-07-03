import { render, screen } from "@testing-library/react";
import { _History as History} from "../../../../src/components/history/History";
import { HistoryViewModel } from "../../../../src/components/history/model/historyViewModel";
import { ComponentFactory } from "../../../../src/common/ComponentFactory";
import { Entry } from "../../../../src/core/entities/History";

describe("History", () => {
  let useViewModel: HistoryViewModel;
  let componentFactory: ComponentFactory;
  let entries: Entry[];

  beforeEach(() => {
    entries = [];
    useViewModel = () => ({
      entries
    });
    componentFactory = {
      create: () => {
        const FakeEntry = ({index}: {index: number}) => <div>{`This is entry ${index}`}</div>
        return FakeEntry
      }
    }
  });

  it("should render an entry", () => {
    addEntry("This is an entry");
    render(<History useViewModel={useViewModel} componentFactory={componentFactory}/>);
    expect(screen.getByText("This is entry 0")).toBeDefined();
  });

  it("should render multiple entries", () => {
    addEntry("This is an entry", "This is another entry");
    render(<History useViewModel={useViewModel} componentFactory={componentFactory}/>);
    expect(screen.getByText("This is entry 0")).toBeDefined();
    expect(screen.getByText("This is entry 1")).toBeDefined();
  });

  function addEntry(...toAdd: string[]) {
    toAdd.forEach(text => {
      entries.push({
        text,
        currentPlayer: 'X',
        squares: []
      });
    });
  }
});
