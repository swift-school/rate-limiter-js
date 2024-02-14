import { Limiter } from "./index";

test('Limiter', async () => {
  // create a rate limiter
  const lmtr = new Limiter();
  expect(lmtr.limited("school")).toBe(false);
  // returns true on the first five calls
  for (let i = 0; i < 5; i++) {
    lmtr.limit("school")
  }
  expect(lmtr.limited("school")).toBe(true);
  expect(lmtr.limited("other school")).toBe(false);
  // wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000))

  expect(lmtr.limited("school")).toBe(false);
});
