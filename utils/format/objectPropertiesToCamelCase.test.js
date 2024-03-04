import { deepStrictEqual } from "node:assert";
import { describe, test } from "node:test";
import snakeToLowerCamelCase from "./objectPropertiesToCamelCase.js";

describe("objectPropertiesToCamelCase", () => {
  test("flat object transformation", () => {
    deepStrictEqual(
      snakeToLowerCamelCase({
        this_is_snake_case: 1,
        thisIsLowerCamelCase: 2,
      }),
      {
        thisIsSnakeCase: 1,
        thisIsLowerCamelCase: 2,
      }
    );
  });

  test("nested objects transformation", () => {
    deepStrictEqual(
      snakeToLowerCamelCase([
        {
          nosnake: 1,
          snake_basket: {
            snake_one: 1,
            snake_two: 2,
          },
        },
        {},
      ]),
      [
        {
          nosnake: 1,
          snakeBasket: {
            snakeOne: 1,
            snakeTwo: 2,
          },
        },
        {},
      ]
    );
  });

  test("none workable argument type undefined", () => {
    deepStrictEqual(snakeToLowerCamelCase(), undefined);
  });

  test("none workable argument type null", () => {
    deepStrictEqual(snakeToLowerCamelCase(null), null);
  });
});
