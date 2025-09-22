/* task_5/js/main.ts
   Brand convention & Nominal typing
*/

/**
 * MajorCredits and MinorCredits interfaces:
 * - both have a numeric 'credits' property
 * - both have a distinguishing 'brand' property so the types are unique
 *
 * Using a string-literal brand is a simple, ALX-friendly way to
 * create nominal/brand distinction in TypeScript for this exercise.
 */
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

/**
 * sumMajorCredits: sums credits of two major subjects and returns MajorCredits
 */
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

/**
 * sumMinorCredits: sums credits of two minor subjects and returns MinorCredits
 */
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

/* Example usage (commented for final submission):
const a: MajorCredits = { credits: 3, brand: 'major' };
const b: MajorCredits = { credits: 4, brand: 'major' };
console.log(sumMajorCredits(a, b)); // { credits: 7, brand: 'major' }
*/
