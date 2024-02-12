import { render, screen } from "@testing-library/react";

import TestPage from "../pages/Frontpage";

test("Heading renders sucessfully", () => {
  render(<TestPage />);
  const element = screen.getByText(/Hello world!/i);

  expect(element).toBeInTheDocument();
});
