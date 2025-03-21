import { createPublicClient, http, PublicClient } from 'viem'
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  base,
  berachain,
  bsc,
  bscTestnet,
  mainnet,
  mantle,
  monadTestnet,
  sonic
} from 'viem/chains'

import { ChainId } from '@traderjoe-xyz/sdk-core'

export const getDefaultPublicClient = (chainId: ChainId): PublicClient => {
  if (chainId === ChainId.SOLANA) {
    throw new Error('SOLANA is not supported')
  }

  const chain = getChain(chainId)
  return createPublicClient({
    chain,
    transport: http()
  })
}

export const getChain = (chainId: Exclude<ChainId, ChainId.SOLANA>) => {
  switch (chainId) {
    case ChainId.ARBITRUM_ONE:
      return arbitrum
    case ChainId.ARB_GOERLI:
      return arbitrumGoerli
    case ChainId.AVALANCHE:
      return avalanche
    case ChainId.FUJI:
      return avalancheFuji
    case ChainId.BNB_CHAIN:
      return bsc
    case ChainId.BNB_TESTNET:
      return bscTestnet
    case ChainId.ETHEREUM:
      return mainnet
    case ChainId.BASE:
      return base
    case ChainId.MANTLE:
      return mantle
    case ChainId.SONIC:
      return sonic
    case ChainId.MONAD_TESTNET:
      return monadTestnet
    case ChainId.BERACHAIN:
      return berachain
  }
}
