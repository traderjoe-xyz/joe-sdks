import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly isNative: false = false as const
  public readonly isToken: true = true as const
  public readonly chainId: number

  /**
   * The contract address on the chain on which this token lives
   */
  public readonly address: string

  public constructor(
    chainId: ChainId,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string
  ) {
    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(
  currencyA: Currency,
  currencyB: Currency
): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WNATIVE = {
  [ChainId.FUJI]: new Token(
    ChainId.FUJI,
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.ARB_GOERLI]: new Token(
    ChainId.ARB_GOERLI,
    '0xaE4EC9901c3076D0DdBe76A520F9E90a6227aCB7',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.BNB_CHAIN]: new Token(
    ChainId.BNB_CHAIN,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.BNB_TESTNET]: new Token(
    ChainId.BNB_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.MANTLE]: new Token(
    ChainId.MANTLE,
    '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    18,
    'WMNT',
    'Wrapped Mantle'
  ),
  [ChainId.BERACHAIN]: new Token(
    ChainId.BERACHAIN,
    '0x6969696969696969696969696969696969696969',
    18,
    'WBERA',
    'Wrapped Bera'
  ),
  [ChainId.BASE]: new Token(
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.MONAD_TESTNET]: new Token(
    ChainId.MONAD_TESTNET,
    '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',
    18,
    'WMON',
    'Wrapped MON'
  ),
  [ChainId.SOLANA]: new Token(
    ChainId.SOLANA,
    'So11111111111111111111111111111111111111112',
    9,
    'WSOL',
    'Wrapped SOL'
  ),
  [ChainId.SONIC]: new Token(
    ChainId.SONIC,
    '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
    18,
    'wS',
    'Wrapped Sonic'
  )
}
export const WAVAX = WNATIVE
