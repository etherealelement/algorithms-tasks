import { createEvent, sample } from "effector";
import { debug } from "patronum";

// initialization (Static)

export const pincodeChanged = createEvent<string>();
const actualPincodeReceived = createEvent<{ pincode: string }>();
const someHappened = createEvent<{pincode: string}>();

sample({
  clock: [actualPincodeReceived, someHappened],
  filter: ({ pincode }) => pincode.length > 6,
  fn: ({ pincode }) => pincode,
  target: [pincodeChanged, someHappened],
});
