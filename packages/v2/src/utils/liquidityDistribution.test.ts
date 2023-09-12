import { it, expect } from 'vitest'
import {
  getUniformDistributionFromBinRange,
  getBidAskDistributionFromBinRange,
  getCurveDistributionFromBinRange
} from './liquidityDistribution'
import { CurrencyAmount, Token, TokenAmount } from '@traderjoe-xyz/sdk-core'
import { parseEther } from 'viem'

const token0 = new Token(
  43113,
  '0x0000000000000000000000000000000000000001',
  18,
  't0'
)

it('getUniformDistributionFromBinRange', () => {
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

it('getBidAskDistributionFromBinRange with amount X and Y', () => {
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
  expect(sumDistributionX).toBeLessThan(BigInt(10) ** BigInt(18) - BigInt(1))
  expect(sumDistributionY).toBeLessThan(BigInt(10) ** BigInt(18) - BigInt(1))
})

it('getBidAskDistributionFromBinRange with amount X only', () => {
  const activeId = 8376038
  const amountA = CurrencyAmount.ether(43113, parseEther('1'))
  const amountB = new TokenAmount(token0, parseEther('0'))

  const params = getBidAskDistributionFromBinRange(
    activeId,
    [activeId - 5, activeId + 5],
    [amountA, amountB]
  )

  const sumDistributionX = params.distributionX.reduce(
    (a, b) => a + b,
    BigInt(0)
  )

  expect(params.deltaIds).toEqual([0, 1, 2, 3, 4, 5])
  expect(params.distributionX).toEqual([
    BigInt('47619047619047619'),
    BigInt('95238095238095238'),
    BigInt('142857142857142857'),
    BigInt('190476190476190476'),
    BigInt('238095238095238095'),
    BigInt('285714285714285714')
  ])
  expect(params.distributionY).toEqual([
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0)
  ])
  expect(sumDistributionX).toEqual(BigInt(10) ** BigInt(18) - BigInt(1))
})

it('getBidAskDistributionFromBinRange with amount Y only', () => {
  const activeId = 8376038
  const amountA = CurrencyAmount.ether(43113, parseEther('0'))
  const amountB = new TokenAmount(token0, parseEther('0.5'))

  const params = getBidAskDistributionFromBinRange(
    activeId,
    [activeId - 5, activeId + 5],
    [amountA, amountB]
  )

  const sumDistributionY = params.distributionY.reduce(
    (a, b) => a + b,
    BigInt(0)
  )

  expect(params.deltaIds).toEqual([-5, -4, -3, -2, -1, 0])
  expect(params.distributionX).toEqual([
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0)
  ])
  expect(params.distributionY).toEqual([
    BigInt('285714285714285714'),
    BigInt('238095238095238095'),
    BigInt('190476190476190476'),
    BigInt('142857142857142857'),
    BigInt('95238095238095238'),
    BigInt('47619047619047619')
  ])
  expect(sumDistributionY).toEqual(BigInt(10) ** BigInt(18) - BigInt(1))
})

it('getCurveDistributionFromBinRange with amount X and Y', () => {
  const activeId = 8376038
  const amountA = CurrencyAmount.ether(43113, parseEther('1'))
  const amountB = new TokenAmount(token0, parseEther('0.5'))

  const params = getCurveDistributionFromBinRange(
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
    BigInt('139235091095125611'),
    BigInt('264309887127866457'),
    BigInt('226004736020696260'),
    BigInt('174096921395845034'),
    BigInt('120818673548873833'),
    BigInt('75534690811592802')
  ])
  expect(params.distributionY).toEqual([
    BigInt('75534690811592802'),
    BigInt('120818673548873833'),
    BigInt('174096921395845034'),
    BigInt('226004736020696260'),
    BigInt('264309887127866457'),
    BigInt('139235091095125611'),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0),
    BigInt(0)
  ])
  expect(sumDistributionX).toBeLessThan(BigInt(10) ** BigInt(18) - BigInt(1))
  expect(sumDistributionY).toBeLessThan(BigInt(10) ** BigInt(18) - BigInt(1))
})

it('getCurveDistributionFromBinRange with amount X only', () => {
  const activeId = 8376038
  const amountA = CurrencyAmount.ether(43113, parseEther('1'))
  const amountB = new TokenAmount(token0, parseEther('0'))

  const params = getCurveDistributionFromBinRange(
    activeId,
    [activeId - 5, activeId + 5],
    [amountA, amountB]
  )

  const sumDistributionX = params.distributionX.reduce(
    (a, b) => a + b,
    BigInt(0)
  )

  expect(params.deltaIds).toEqual([0, 1, 2, 3, 4, 5])
  expect(params.distributionX).toEqual([
    BigInt('244436099596057025'),
    BigInt('232006448180761579'),
    BigInt('198382877939128516'),
    BigInt('152819135187004190'),
    BigInt('106052450888545820'),
    BigInt('66302988208502866')
  ])
  expect(params.distributionY).toEqual([
    BigInt('0'),
    BigInt('0'),
    BigInt('0'),
    BigInt('0'),
    BigInt('0'),
    BigInt('0')
  ])
  expect(sumDistributionX).toBeLessThan(BigInt(10) ** BigInt(18) - BigInt(1))
})

it('getCurveDistributionFromBinRange with amount Y only', () => {
  const activeId = 8376038
  const amountA = CurrencyAmount.ether(43113, parseEther('0'))
  const amountB = new TokenAmount(token0, parseEther('0.5'))

  const params = getCurveDistributionFromBinRange(
    activeId,
    [activeId - 5, activeId + 5],
    [amountA, amountB]
  )

  const sumDistributionY = params.distributionY.reduce(
    (a, b) => a + b,
    BigInt(0)
  )

  expect(params.deltaIds).toEqual([-5, -4, -3, -2, -1, 0])
  expect(params.distributionX).toEqual([
    BigInt('0'),
    BigInt('0'),
    BigInt('0'),
    BigInt('0'),
    BigInt('0'),
    BigInt('0')
  ])
  expect(params.distributionY).toEqual([
    BigInt('66302988208502866'),
    BigInt('106052450888545820'),
    BigInt('152819135187004190'),
    BigInt('198382877939128516'),
    BigInt('232006448180761579'),
    BigInt('244436099596057025')
  ])
  expect(sumDistributionY).toBeLessThan(BigInt(10) ** BigInt(18) - BigInt(1))
})
