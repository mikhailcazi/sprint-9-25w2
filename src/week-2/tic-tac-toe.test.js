import { render, screen, userEvent } from "@testing-library/react";
import TicTacToe from "./tic-tac-toe";

describe("TicTacToe Component", () => {
  beforeEach(() => {
    render(<TicTacToe />);
  });

  test("It loads", () => {
    const text = screen.getByText("Welcome to Tic-Tac-Toe!");
    expect(text).toBeInTheDocument();
  });

  test("On clicking the reset button, the game gets reset", async () => {
    // Arrange
    const button = screen.getByRole("button");

    // Act
    await userEvent.click(button);

    // Assert
    const text = screen.queryByText("X");
    expect(text).not.toBeInTheDocument();


    // getBy
    // findBy
    // queryBy
  });

    test("On clicking the reset button, the game gets reset", async () => {

    // Assert
    const text = await screen.findByText("It is Player 1's turn!", 3000);
    expect(text).not.toBeInTheDocument();


    // getBy
    // findBy
    // queryBy
  });
});
