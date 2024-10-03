import { test, expect } from "@jest/globals";
import { Character } from "../Character";

test("Testing the `Character` class without a string name", () => {
  expect(() => {
    new Character(10, 'Bowman');
  }).toThrow("Error! The character's name should be a string and contain from 2 to 10 symbols!");
});

test("Testing the `Character` class with one symbol in the name", () => {
  expect(() => {
    new Character('A', 'Bowman');
  }).toThrow("Error! The character's name should be a string and contain from 2 to 10 symbols!");
});

test("Testing the `Character` class with ten symbols in the name", () => {
  expect(() => {
    new Character('Aaaaaaaaaaa', 'Bowman');
  }).toThrow("Error! The character's name should be a string and contain from 2 to 10 symbols!");
});

test("Testing the `Character' class with the wrong type", () => {
  expect(() => {
    new Character('Player', 'Superman');
  }).toThrow("Error! Such character does not exist!");
});

test("Testing the `Character' class with the correct type", () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
  };

  expect(new Character('Player', 'Bowman')).toEqual(expected);
});