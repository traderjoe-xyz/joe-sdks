import { Price as PriceBase } from '@traderjoe-xyz/sdk-core'

import { Route } from './route'

export class Price extends PriceBase {
  public static fromRoute(route: Route): Price {
    const prices: Price[] = []
    for (const [i, pair] of route.pairs.entries()) {
      prices.push(
        route.path[i].equals(pair.token0)
          ? new Price(
              pair.reserve0.currency,
              pair.reserve1.currency,
              pair.reserve0.raw,
              pair.reserve1.raw
            )
          : new Price(
              pair.reserve1.currency,
              pair.reserve0.currency,
              pair.reserve1.raw,
              pair.reserve0.raw
            )
      )
    }
    return prices
      .slice(1)
      .reduce(
        (accumulator, currentValue) => accumulator.multiply(currentValue),
        prices[0]
      )
  }
}
