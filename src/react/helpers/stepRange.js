export const stepRage = (steps) => {
  const currStepIndex = steps.findIndex((step) => step.selected);
  const totalLength = steps.length;
  const initVal = steps[0];
  const lastVal = steps[steps.length - 1];

  let nextStep = [];

  /** example - [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16] - length = 15;
   * if currStepIndex < 3 --> [1,2,3,4,5,'...',16];
   * if currStepIndex > (15 - 5) || currStepIndex === 15 --> [1,'...',11,12,14,15,16];
   * if currStepIndex >= 3 || currStepIndex < (15) --> [1,'...',3,4,5,'...',16];
   */

  if (currStepIndex < 3 && totalLength > 7) {
    const firstStep = steps.slice(0, 5);
    nextStep = [...firstStep, "...", lastVal];
  } else if (
    (currStepIndex > totalLength - 5 && totalLength > 7) ||
    (currStepIndex === totalLength - 1 && totalLength > 7)
  ) {
    const lastStep = steps.slice(totalLength - 5, totalLength);
    nextStep = [initVal, "...", ...lastStep];
  } else if (
    (currStepIndex >= 3 && totalLength > 7) ||
    (currStepIndex < totalLength - 1 && totalLength > 7)
  ) {
    const curr = steps[currStepIndex];
    const prev = steps.slice(currStepIndex - 1, currStepIndex);
    const next = steps.slice(currStepIndex + 1, currStepIndex + 2);
    nextStep = [initVal, "...", ...prev, curr, ...next, "...", lastVal];
  } else {
    nextStep = steps;
  }

  return [...nextStep];
};
