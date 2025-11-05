import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../landing_pages/home/Hero";
import Awards from "../landing_pages/home/Awards";

describe("Hero Component", () => {
  test("renders hero image with correct alt text", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const signupButton = screen.getByRole("button");
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("bg-blue-600");
  });

  test("renders awards hero image with correct alt text", () => {
    render(
      <MemoryRouter>
        <Awards />
      </MemoryRouter>
    );
    const awardImg = screen.getByAltText("Largest Broker");
    expect(awardImg).toBeInTheDocument();
    expect(awardImg).toHaveAttribute("src", "/images/largestBroker.svg");
  });

});
