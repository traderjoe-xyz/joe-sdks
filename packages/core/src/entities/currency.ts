import JSBI from 'jsbi'
import { Token } from './token'
import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * Represents the native currency of the chain on which it resides, e.g. ETH, AVAX
 */
export class NativeCurrency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly isNative: true = true as const
  public readonly isToken: false = false as const
  public readonly chainId: number

  /**
   * Constructs an instance of the base class `NativeCurrency`.
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  constructor(
    chainId: number,
    decimals: number,
    symbol?: string,
    name?: string
  ) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)
    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public equals(other: NativeCurrency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}

/*
 * CNATIVE is the main usage of a 'native' currency, i.e. ETH, AVAX, BNB
 */
export class CNATIVE extends NativeCurrency {
  constructor(chainId: number) {
    let symbol: string
    let name: string
    switch (chainId) {
      case 43113:
      case 43114:
        symbol = 'AVAX'
        name = 'Avalanche'
        break
      case 42161:
      case 421613:
        symbol = 'ETH'
        name = 'Arbitrum'
        break
      case 56:
        symbol = 'BNB'
        name = 'BNB'
        break
      case 97:
        symbol = 'tBNB'
        name = 'BNB'
        break
      case 5000:
        symbol = 'MNT'
        name = 'Mantle'
        break
      case 80084:
        symbol = 'BERA'
        name = 'Berachain'
        break
      case 1:
        symbol = 'ETH'
        name = 'Ethereum'
        break
      default:
        symbol = ''
        name = ''
        break
    }
    super(chainId, 18, symbol, name)
  }
  public equals(other: NativeCurrency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  private static _etherCache: { [chainId: number]: CNATIVE } = {}

  public static onChain(chainId: number): CNATIVE {
    return (
      this._etherCache[chainId] ??
      (this._etherCache[chainId] = new CNATIVE(chainId))
    )
  }
}

/**
 * for backward compatibility
 */
const CAVAX = CNATIVE.onChain(43114)
export { CAVAX }

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
export type Currency = NativeCurrency | Token
