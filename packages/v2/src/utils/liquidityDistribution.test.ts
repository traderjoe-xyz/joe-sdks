import { describe, it, expect } from 'vitest'
import { getUniformDistributionFromBinRange } from './liquidityDistribution'

describe('getUniformDistributionFromBinRange', () => {
  it('computes delta ids and distribution values correctly', () => {
    const activeId = 8376038

    const params = getUniformDistributionFromBinRange(activeId, [
      activeId - 5,
      activeId + 5
    ])

    const sumDistributionX = params.distributionX.reduce(
      (a, b) => a + b,
      BigInt(0)
    )
    const sumDistributionY = params.distributionY.reduce(
      (a, b) => a + b,
      BigInt(0)
    )

    expect(params.deltaIds).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    expect(params.distributionX).toEqual([
      BigInt(0),
      BigInt(0),
      BigInt(0),
      BigInt(0),
      BigInt(0),
      BigInt('90909090909090909'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818')
    ])
    expect(params.distributionY).toEqual([
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('181818181818181818'),
      BigInt('90909090909090909'),
      BigInt(0),
      BigInt(0),
      BigInt(0),
      BigInt(0),
      BigInt(0)
    ])
    expect(sumDistributionX).toEqual(BigInt(10) ** BigInt(18) - BigInt(1))
    expect(sumDistributionY).toEqual(BigInt(10) ** BigInt(18) - BigInt(1))
  })
})
