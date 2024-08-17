import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  it("Contains an image of myself", () => {
    render(<Hero />);
    const portfolioImage = screen.getByText("Hero");
    expect(portfolioImage).toBeInTheDocument();
  });

  it("Contains introduction text", () => {
    render(<Hero />);
    const welcomeMessage = screen.getByRole("heading");
    const nameIntroduction = screen.getByText("I'm Marcus Zagorski");

    expect(welcomeMessage.textContent).toBe("Hi There 👋🏽");
    expect(nameIntroduction).toBeInTheDocument();
  });

  it("Has my contact me locations", () => {
    render(<Hero />);
    const contactMe = [
      "www.github.com/",
      "www.linkedin.com/en",
      "www.whatsapp.com",
      "www.twitter.com",
    ];

    contactMe.forEach((contact) => {
      const linkElement = screen.getByRole("link", { name: contact });
      expect(linkElement).toHaveAttribute("href", contact);
    });
  });
});
