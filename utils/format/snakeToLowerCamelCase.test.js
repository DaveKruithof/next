import { deepStrictEqual } from "node:assert";
import { describe, test } from "node:test";
import snakeToLowerCamelCase from "./snakeToLowerCamelCase.js";

describe("snakeToLowerCamelCase", () => {
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
});
