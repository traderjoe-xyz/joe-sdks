import { it, expect } from 'vitest'
import {
  getUniformDistributionFromBinRange,
  getBidAskDistributionFromBinRange
} from './liquidityDistribution'
import { CurrencyAmount, Token, TokenAmount } from '@traderjoe-xyz/sdk-core'
import { parseEther } from 'viem'

const token0 = new Token(
  43113,
  '0x0000000000000000000000000000000000000001',
  18,
  't0'
)

it('getUniformDistributionFromBinRange works', () => {
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

it('getBidAskDistributionFromBinRange works', () => {
  const activeId = 8376038
  const amountA = CurrencyAmount.ether(43113, parseEther('1'))
  const amountB = new TokenAmount(token0, parseEther('0.5'))

  const params = getBidAskDistributionFromBinRange(
    activeId,
    [activeId - 5, activeId + 5],
    [amountA, amountB]
  )

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
    BigInt('24390243902439024'),
    BigInt('97560975609756097'),
    BigInt('146341463414634146'),
    BigInt('195121951219512195'),
    BigInt('243902439024390243'),
    BigInt('292682926829268292')
  ])
  expect(params.distributionY).toEqual([
    BigInt('292682926829268292'),
    BigInt('243902439024390243'),
    BigInt('195121951219512195'),
    BigInt('146341463414634146'),
    BigInt('97560975609756097'),
    BigInt('24390243902439024'),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0)
  ])
  // expect(sumDistributionX).toEqual(BigInt(10) ** BigInt(18) - BigInt(1))
  // expect(sumDistributionY).toEqual(BigInt(10) ** BigInt(18) - BigInt(1))
})
