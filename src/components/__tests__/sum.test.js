import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(4, 8);

    expect(result).toBe(12);
})