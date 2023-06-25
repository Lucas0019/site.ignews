import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { AsyncButton } from ".";

describe("AsyncButton component button visible", () => {
  it("renders correctly", async () => {
    render(<AsyncButton />);

    expect(screen.getByText("Lista de Posts")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText("Carregar mais posts")).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});

describe("AsyncButton component button invisible", () => {
  it("renders correctly button invisible", async () => {
    render(<AsyncButton />);

    expect(screen.getByText("Lista de Posts")).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.queryByText("Carregar mais posts"), {
      timeout: 2000,
    });
  });
});
