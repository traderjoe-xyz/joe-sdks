export const LiquidityHelperV2ABI = [
  {
    inputs: [],
    name: 'BinHelper__LiquidityOverflow',
    type: 'error'
  },
  {
    inputs: [],
    name: 'FeesAmounts__LengthMismatch',
    type: 'error'
  },
  {
    inputs: [],
    name: 'SafeCast__Exceeds24Bits',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256'
      },
      {
        internalType: 'int256',
        name: 'y',
        type: 'int256'
      }
    ],
    name: 'Uint128x128Math__PowUnderflow',
    type: 'error'
  },
  {
    inputs: [],
    name: 'Uint256x256Math__MulDivOverflow',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'previousX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'previousY',
        type: 'uint256[]'
      }
    ],
    name: 'getAmountsAndFeesEarnedOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'amountsX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsY',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'feesX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'feesY',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'liquidities',
        type: 'uint256[]'
      }
    ],
    name: 'getAmountsForLiquidities',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'amountsX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsY',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'shares',
        type: 'uint256[]'
      }
    ],
    name: 'getAmountsForShares',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'amountsX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsY',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }
    ],
    name: 'getAmountsOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'amountsX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsY',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'pair',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint24',
        name: 'id',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'lengthLeft',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'lengthRight',
        type: 'uint24'
      }
    ],
    name: 'getBinsReserveOf',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24'
      },
      {
        components: [
          {
            internalType: 'uint24',
            name: 'id',
            type: 'uint24'
          },
          {
            internalType: 'uint128',
            name: 'reserveX',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'reserveY',
            type: 'uint128'
          },
          {
            internalType: 'uint256',
            name: 'shares',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalShares',
            type: 'uint256'
          }
        ],
        internalType: 'struct NonEmptyBinHelper.PopulatedBinUser[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'previousLiquidities',
        type: 'uint256[]'
      }
    ],
    name: 'getFeeSharesAndFeesEarnedOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'feeShares',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'feesX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'feesY',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsY',
        type: 'uint256[]'
      }
    ],
    name: 'getLiquiditiesForAmounts',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'liquidities',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'shares',
        type: 'uint256[]'
      }
    ],
    name: 'getLiquiditiesForShares',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'liquidities',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }
    ],
    name: 'getLiquiditiesOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'liquidities',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'pair',
        type: 'address'
      },
      {
        internalType: 'uint24',
        name: 'start',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'end',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'length',
        type: 'uint24'
      }
    ],
    name: 'getPopulatedBinsId',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'pair',
        type: 'address'
      },
      {
        internalType: 'uint24',
        name: 'start',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'end',
        type: 'uint24'
      },
      {
        internalType: 'uint24',
        name: 'length',
        type: 'uint24'
      }
    ],
    name: 'getPopulatedBinsReserves',
    outputs: [
      {
        components: [
          {
            internalType: 'uint24',
            name: 'id',
            type: 'uint24'
          },
          {
            internalType: 'uint128',
            name: 'reserveX',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'reserveY',
            type: 'uint128'
          }
        ],
        internalType: 'struct NonEmptyBinHelper.PopulatedBin[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amountsY',
        type: 'uint256[]'
      }
    ],
    name: 'getSharesForAmounts',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'shares',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'liquidities',
        type: 'uint256[]'
      }
    ],
    name: 'getSharesForLiquidities',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'shares',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBPair',
        name: 'lbPair',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }
    ],
    name: 'getSharesOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'balances',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const
