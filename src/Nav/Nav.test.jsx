import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import Nav from "./Nav";

describe("Navigation component", () => {
  it("Has an image of my logo", () => {
    render(<Nav />);
    const myLogo = screen.getByRole("img");
    expect(myLogo).toHaveAttribute("src", "/logo-design.png");
    expect(myLogo).toBeInTheDocument();
  });

  it("Has a navigation menu", () => {
    render(<Nav />);
    const semanticNav = screen.getByRole("navigation");
    expect(semanticNav).toBeInTheDocument();

    const links = ["Home", "About", "Projects", "Contact"];

    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
