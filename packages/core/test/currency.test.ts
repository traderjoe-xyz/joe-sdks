import { CNATIVE } from '../src'
import { describe, it, expect } from 'vitest'

describe('NativeCurrency', () => {
  describe('CNATIVE', () => {
    it('returns AVAX for 43114', () => {
      expect(CNATIVE.onChain(43114).symbol === 'AVAX').toBe(true)
    })
    it('returns AVAX for 43113', () => {
      expect(CNATIVE.onChain(43113).symbol === 'AVAX').toBe(true)
    })
    it('returns ETH for 42161', () => {
      expect(CNATIVE.onChain(42161).symbol === 'ETH').toBe(true)
    })
    it('returns ETH for 421613', () => {
      expect(CNATIVE.onChain(421613).symbol === 'ETH').toBe(true)
    })
    it('returns BNB for 56', () => {
      expect(CNATIVE.onChain(56).symbol === 'BNB').toBe(true)
    })
    it('returns BNB for 97', () => {
      expect(CNATIVE.onChain(97).symbol === 'tBNB').toBe(true)
    })
    it('returns MNT for 5000', () => {
      expect(CNATIVE.onChain(5000).symbol === 'MNT').toBe(true)
    })
    it('returns BERA for 80094', () => {
      expect(CNATIVE.onChain(80094).symbol === 'BERA').toBe(true)
    })
    it('returns ETH for 8453', () => {
      expect(CNATIVE.onChain(8453).symbol === 'ETH').toBe(true)
    })
    it('returns MON for 10143', () => {
      expect(CNATIVE.onChain(10143).symbol === 'MON').toBe(true)
    })
    it('returns SOL for 1399811149', () => {
      expect(CNATIVE.onChain(1399811149).symbol === 'SOL').toBe(true)
    })
  })
})
