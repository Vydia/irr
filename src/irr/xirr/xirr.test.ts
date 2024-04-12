import { Polynomial } from '../../polynomial'
import { xirr } from '../..'
import { RootFinderOptions, RootFinderMethod } from '../../root-finder'

const UNIQUE_ROOT = {
  converged: true,
  iterations: 0,
  value: Math.PI,
}
const UNIQUE_XIRR_RESULT = {
  days: 60,
  rate: Math.PI - 1,
}
const UNIQUE_DATA = [
  { amount: -10, date: '20180101' },
  { amount: 10, date: '20180201' },
  { amount: 0.05, date: '20180301' },
]
const UNIQUE_OPTIONS: RootFinderOptions = {
  estimate: 'auto',
  epsilon: 1e-8,
  fallbackMethod: RootFinderMethod.Bisection,
  maxIterations: 100,
  method: RootFinderMethod.Newton,
}

describe('xirr', () => {
  test('uses Polynomial.prototype.findRoot() for the calculation', () => {
    const stub = jest
      .spyOn(Polynomial.prototype, 'findRoot')
      .mockReturnValue(UNIQUE_ROOT)

    const result = xirr(UNIQUE_DATA, UNIQUE_OPTIONS)

    expect(result).toStrictEqual(UNIQUE_XIRR_RESULT)
    expect(stub).toHaveBeenCalledTimes(1)

    jest.restoreAllMocks()
  })
  test('groups amounts from the same date', () => {
    const result = xirr(
      [
        { amount: -10, date: '20180101' },
        { amount: 5, date: '20180201' },
        { amount: 5, date: '20180201' },
        { amount: 0.05, date: '20180301' },
      ],
      UNIQUE_OPTIONS,
    )

    expect(result).toStrictEqual({ days: 60, rate: 0.0001601831164046441 })
  })
  test('repro nan - this one fails', () => {
    const result = xirr(
      [
        {
          amount: -2428, // just one dollar less fails
          date: new Date('2024-04-12T17:01:13.432Z'),
        },
        {
          amount: 150,
          date: new Date('2024-05-12T17:01:13.432Z'),
        },
        {
          amount: 147,
          date: new Date('2024-06-12T17:01:13.432Z'),
        },
        {
          amount: 144.06,
          date: new Date('2024-07-12T17:01:13.432Z'),
        },
        {
          amount: 141.1788,
          date: new Date('2024-08-12T17:01:13.432Z'),
        },
        {
          amount: 138.355224,
          date: new Date('2024-09-12T17:01:13.432Z'),
        },
        {
          amount: 135.58811952,
          date: new Date('2024-10-12T17:01:13.432Z'),
        },
        {
          amount: 132.8763571296,
          date: new Date('2024-11-12T18:01:13.432Z'),
        },
        {
          amount: 130.21882998700798,
          date: new Date('2024-12-12T18:01:13.432Z'),
        },
        {
          amount: 127.61445338726782,
          date: new Date('2025-01-12T18:01:13.432Z'),
        },
        {
          amount: 125.06216431952244,
          date: new Date('2025-02-12T18:01:13.432Z'),
        },
        {
          amount: 122.56092103313199,
          date: new Date('2025-03-12T17:01:13.432Z'),
        },
        {
          amount: 120.10970261246936,
          date: new Date('2025-04-12T17:01:13.432Z'),
        },
        {
          amount: 117.70750856021996,
          date: new Date('2025-05-12T17:01:13.432Z'),
        },
        {
          amount: 115.35335838901558,
          date: new Date('2025-06-12T17:01:13.432Z'),
        },
        {
          amount: 113.04629122123526,
          date: new Date('2025-07-12T17:01:13.432Z'),
        },
        {
          amount: 110.78536539681056,
          date: new Date('2025-08-12T17:01:13.432Z'),
        },
        {
          amount: 108.56965808887435,
          date: new Date('2025-09-12T17:01:13.432Z'),
        },
        {
          amount: 106.39826492709686,
          date: new Date('2025-10-12T17:01:13.432Z'),
        },
        {
          amount: 104.27029962855491,
          date: new Date('2025-11-12T18:01:13.432Z'),
        },
        {
          amount: 102.18489363598383,
          date: new Date('2025-12-12T18:01:13.432Z'),
        },
        {
          amount: 100.14119576326414,
          date: new Date('2026-01-12T18:01:13.432Z'),
        },
        {
          amount: 98.13837184799887,
          date: new Date('2026-02-12T18:01:13.432Z'),
        },
        {
          amount: 96.17560441103889,
          date: new Date('2026-03-12T17:01:13.432Z'),
        },
        {
          amount: 94.25209232281811,
          date: new Date('2026-04-12T17:01:13.432Z'),
        },
        {
          amount: 92.36705047636174,
          date: new Date('2026-05-12T17:01:13.432Z'),
        },
        {
          amount: 90.51970946683451,
          date: new Date('2026-06-12T17:01:13.432Z'),
        },
        {
          amount: 88.70931527749781,
          date: new Date('2026-07-12T17:01:13.432Z'),
        },
        {
          amount: 86.93512897194785,
          date: new Date('2026-08-12T17:01:13.432Z'),
        },
        {
          amount: 85.1964263925089,
          date: new Date('2026-09-12T17:01:13.432Z'),
        },
        {
          amount: 83.49249786465872,
          date: new Date('2026-10-12T17:01:13.432Z'),
        },
        {
          amount: 81.82264790736554,
          date: new Date('2026-11-12T18:01:13.432Z'),
        },
        {
          amount: 8.018619494921822,
          date: new Date('2026-12-12T18:01:13.432Z'),
        },
        {
          amount: 7.858247105023384,
          date: new Date('2027-01-12T18:01:13.432Z'),
        },
        {
          amount: 7.7010821629229165,
          date: new Date('2027-02-12T18:01:13.432Z'),
        },
        {
          amount: 7.547060519664458,
          date: new Date('2027-03-12T18:01:13.432Z'),
        },
        {
          amount: 7.39611930927117,
          date: new Date('2027-04-12T17:01:13.432Z'),
        },
        {
          amount: 7.248196923085746,
          date: new Date('2027-05-12T17:01:13.432Z'),
        },
        {
          amount: 7.1032329846240305,
          date: new Date('2027-06-12T17:01:13.432Z'),
        },
        {
          amount: 6.961168324931549,
          date: new Date('2027-07-12T17:01:13.432Z'),
        },
        {
          amount: 6.821944958432919,
          date: new Date('2027-08-12T17:01:13.432Z'),
        },
        {
          amount: 6.6855060592642594,
          date: new Date('2027-09-12T17:01:13.432Z'),
        },
        {
          amount: 6.551795938078975,
          date: new Date('2027-10-12T17:01:13.432Z'),
        },
        {
          amount: 6.420760019317395,
          date: new Date('2027-11-12T18:01:13.432Z'),
        },
        {
          amount: 6.2923448189310465,
          date: new Date('2027-12-12T18:01:13.432Z'),
        },
        {
          amount: 6.166497922552426,
          date: new Date('2028-01-12T18:01:13.432Z'),
        },
        {
          amount: 6.043167964101377,
          date: new Date('2028-02-12T18:01:13.432Z'),
        },
        {
          amount: 5.92230460481935,
          date: new Date('2028-03-12T17:01:13.432Z'),
        },
        {
          amount: 5.803858512722963,
          date: new Date('2028-04-12T17:01:13.432Z'),
        },
        {
          amount: 5.687781342468503,
          date: new Date('2028-05-12T17:01:13.432Z'),
        },
        {
          amount: 5.574025715619133,
          date: new Date('2028-06-12T17:01:13.432Z'),
        },
        {
          amount: 5.46254520130675,
          date: new Date('2028-07-12T17:01:13.432Z'),
        },
        {
          amount: 5.353294297280615,
          date: new Date('2028-08-12T17:01:13.432Z'),
        },
        {
          amount: 5.246228411335003,
          date: new Date('2028-09-12T17:01:13.432Z'),
        },
        {
          amount: 5.141303843108303,
          date: new Date('2028-10-12T17:01:13.432Z'),
        },
        {
          amount: 5.038477766246137,
          date: new Date('2028-11-12T18:01:13.432Z'),
        },
        {
          amount: 4.9377082109212145,
          date: new Date('2028-12-12T18:01:13.432Z'),
        },
        {
          amount: 4.83895404670279,
          date: new Date('2029-01-12T18:01:13.432Z'),
        },
        {
          amount: 4.742174965768735,
          date: new Date('2029-02-12T18:01:13.432Z'),
        },
        {
          amount: 4.64733146645336,
          date: new Date('2029-03-12T17:01:13.432Z'),
        },
        {
          amount: 4.554384837124292,
          date: new Date('2029-04-12T17:01:13.432Z'),
        },
      ],
      UNIQUE_OPTIONS,
    )

    expect(result).toStrictEqual({ days: 1827, rate: 0.0001 }) // Not NaN please!
  })

  test('repro nan - this one passes', () => {
    const result = xirr(
      [
        {
          amount: -2429, // just one dollar more passes
          date: new Date('2024-04-12T17:01:13.432Z'),
        },
        {
          amount: 150,
          date: new Date('2024-05-12T17:01:13.432Z'),
        },
        {
          amount: 147,
          date: new Date('2024-06-12T17:01:13.432Z'),
        },
        {
          amount: 144.06,
          date: new Date('2024-07-12T17:01:13.432Z'),
        },
        {
          amount: 141.1788,
          date: new Date('2024-08-12T17:01:13.432Z'),
        },
        {
          amount: 138.355224,
          date: new Date('2024-09-12T17:01:13.432Z'),
        },
        {
          amount: 135.58811952,
          date: new Date('2024-10-12T17:01:13.432Z'),
        },
        {
          amount: 132.8763571296,
          date: new Date('2024-11-12T18:01:13.432Z'),
        },
        {
          amount: 130.21882998700798,
          date: new Date('2024-12-12T18:01:13.432Z'),
        },
        {
          amount: 127.61445338726782,
          date: new Date('2025-01-12T18:01:13.432Z'),
        },
        {
          amount: 125.06216431952244,
          date: new Date('2025-02-12T18:01:13.432Z'),
        },
        {
          amount: 122.56092103313199,
          date: new Date('2025-03-12T17:01:13.432Z'),
        },
        {
          amount: 120.10970261246936,
          date: new Date('2025-04-12T17:01:13.432Z'),
        },
        {
          amount: 117.70750856021996,
          date: new Date('2025-05-12T17:01:13.432Z'),
        },
        {
          amount: 115.35335838901558,
          date: new Date('2025-06-12T17:01:13.432Z'),
        },
        {
          amount: 113.04629122123526,
          date: new Date('2025-07-12T17:01:13.432Z'),
        },
        {
          amount: 110.78536539681056,
          date: new Date('2025-08-12T17:01:13.432Z'),
        },
        {
          amount: 108.56965808887435,
          date: new Date('2025-09-12T17:01:13.432Z'),
        },
        {
          amount: 106.39826492709686,
          date: new Date('2025-10-12T17:01:13.432Z'),
        },
        {
          amount: 104.27029962855491,
          date: new Date('2025-11-12T18:01:13.432Z'),
        },
        {
          amount: 102.18489363598383,
          date: new Date('2025-12-12T18:01:13.432Z'),
        },
        {
          amount: 100.14119576326414,
          date: new Date('2026-01-12T18:01:13.432Z'),
        },
        {
          amount: 98.13837184799887,
          date: new Date('2026-02-12T18:01:13.432Z'),
        },
        {
          amount: 96.17560441103889,
          date: new Date('2026-03-12T17:01:13.432Z'),
        },
        {
          amount: 94.25209232281811,
          date: new Date('2026-04-12T17:01:13.432Z'),
        },
        {
          amount: 92.36705047636174,
          date: new Date('2026-05-12T17:01:13.432Z'),
        },
        {
          amount: 90.51970946683451,
          date: new Date('2026-06-12T17:01:13.432Z'),
        },
        {
          amount: 88.70931527749781,
          date: new Date('2026-07-12T17:01:13.432Z'),
        },
        {
          amount: 86.93512897194785,
          date: new Date('2026-08-12T17:01:13.432Z'),
        },
        {
          amount: 85.1964263925089,
          date: new Date('2026-09-12T17:01:13.432Z'),
        },
        {
          amount: 83.49249786465872,
          date: new Date('2026-10-12T17:01:13.432Z'),
        },
        {
          amount: 81.82264790736554,
          date: new Date('2026-11-12T18:01:13.432Z'),
        },
        {
          amount: 8.018619494921822,
          date: new Date('2026-12-12T18:01:13.432Z'),
        },
        {
          amount: 7.858247105023384,
          date: new Date('2027-01-12T18:01:13.432Z'),
        },
        {
          amount: 7.7010821629229165,
          date: new Date('2027-02-12T18:01:13.432Z'),
        },
        {
          amount: 7.547060519664458,
          date: new Date('2027-03-12T18:01:13.432Z'),
        },
        {
          amount: 7.39611930927117,
          date: new Date('2027-04-12T17:01:13.432Z'),
        },
        {
          amount: 7.248196923085746,
          date: new Date('2027-05-12T17:01:13.432Z'),
        },
        {
          amount: 7.1032329846240305,
          date: new Date('2027-06-12T17:01:13.432Z'),
        },
        {
          amount: 6.961168324931549,
          date: new Date('2027-07-12T17:01:13.432Z'),
        },
        {
          amount: 6.821944958432919,
          date: new Date('2027-08-12T17:01:13.432Z'),
        },
        {
          amount: 6.6855060592642594,
          date: new Date('2027-09-12T17:01:13.432Z'),
        },
        {
          amount: 6.551795938078975,
          date: new Date('2027-10-12T17:01:13.432Z'),
        },
        {
          amount: 6.420760019317395,
          date: new Date('2027-11-12T18:01:13.432Z'),
        },
        {
          amount: 6.2923448189310465,
          date: new Date('2027-12-12T18:01:13.432Z'),
        },
        {
          amount: 6.166497922552426,
          date: new Date('2028-01-12T18:01:13.432Z'),
        },
        {
          amount: 6.043167964101377,
          date: new Date('2028-02-12T18:01:13.432Z'),
        },
        {
          amount: 5.92230460481935,
          date: new Date('2028-03-12T17:01:13.432Z'),
        },
        {
          amount: 5.803858512722963,
          date: new Date('2028-04-12T17:01:13.432Z'),
        },
        {
          amount: 5.687781342468503,
          date: new Date('2028-05-12T17:01:13.432Z'),
        },
        {
          amount: 5.574025715619133,
          date: new Date('2028-06-12T17:01:13.432Z'),
        },
        {
          amount: 5.46254520130675,
          date: new Date('2028-07-12T17:01:13.432Z'),
        },
        {
          amount: 5.353294297280615,
          date: new Date('2028-08-12T17:01:13.432Z'),
        },
        {
          amount: 5.246228411335003,
          date: new Date('2028-09-12T17:01:13.432Z'),
        },
        {
          amount: 5.141303843108303,
          date: new Date('2028-10-12T17:01:13.432Z'),
        },
        {
          amount: 5.038477766246137,
          date: new Date('2028-11-12T18:01:13.432Z'),
        },
        {
          amount: 4.9377082109212145,
          date: new Date('2028-12-12T18:01:13.432Z'),
        },
        {
          amount: 4.83895404670279,
          date: new Date('2029-01-12T18:01:13.432Z'),
        },
        {
          amount: 4.742174965768735,
          date: new Date('2029-02-12T18:01:13.432Z'),
        },
        {
          amount: 4.64733146645336,
          date: new Date('2029-03-12T17:01:13.432Z'),
        },
        {
          amount: 4.554384837124292,
          date: new Date('2029-04-12T17:01:13.432Z'),
        },
      ],
      UNIQUE_OPTIONS,
    )

    expect(result).toStrictEqual({ days: 1827, rate: 0.0009484738135601134 })
  })
})
