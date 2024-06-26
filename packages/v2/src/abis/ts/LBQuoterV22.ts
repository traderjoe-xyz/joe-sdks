export const LBQuoterV22ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'factoryV1', type: 'address' },
      { internalType: 'address', name: 'legacyFactoryV2', type: 'address' },
      { internalType: 'address', name: 'factoryV2_1', type: 'address' },
      { internalType: 'address', name: 'factoryV2_2', type: 'address' },
      { internalType: 'address', name: 'legacyRouterV2', type: 'address' },
      { internalType: 'address', name: 'routerV2_1', type: 'address' },
      { internalType: 'address', name: 'routerV2_2', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { inputs: [], name: 'JoeLibrary__AddressZero', type: 'error' },
  { inputs: [], name: 'JoeLibrary__IdenticalAddresses', type: 'error' },
  { inputs: [], name: 'JoeLibrary__InsufficientAmount', type: 'error' },
  { inputs: [], name: 'JoeLibrary__InsufficientLiquidity', type: 'error' },
  { inputs: [], name: 'LBQuoter_InvalidLength', type: 'error' },
  { inputs: [], name: 'SafeCast__Exceeds128Bits', type: 'error' },
  { inputs: [], name: 'SafeCast__Exceeds24Bits', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'x', type: 'uint256' },
      { internalType: 'int256', name: 'y', type: 'int256' }
    ],
    name: 'Uint128x128Math__PowUnderflow',
    type: 'error'
  },
  { inputs: [], name: 'Uint256x256Math__MulDivOverflow', type: 'error' },
  { inputs: [], name: 'Uint256x256Math__MulShiftOverflow', type: 'error' },
  {
    inputs: [
      { internalType: 'address[]', name: 'route', type: 'address[]' },
      { internalType: 'uint128', name: 'amountIn', type: 'uint128' }
    ],
    name: 'findBestPathFromAmountIn',
    outputs: [
      {
        components: [
          { internalType: 'address[]', name: 'route', type: 'address[]' },
          { internalType: 'address[]', name: 'pairs', type: 'address[]' },
          { internalType: 'uint256[]', name: 'binSteps', type: 'uint256[]' },
          {
            internalType: 'enum ILBRouter.Version[]',
            name: 'versions',
            type: 'uint8[]'
          },
          { internalType: 'uint128[]', name: 'amounts', type: 'uint128[]' },
          {
            internalType: 'uint128[]',
            name: 'virtualAmountsWithoutSlippage',
            type: 'uint128[]'
          },
          { internalType: 'uint128[]', name: 'fees', type: 'uint128[]' }
        ],
        internalType: 'struct LBQuoter.Quote',
        name: 'quote',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'route', type: 'address[]' },
      { internalType: 'uint128', name: 'amountOut', type: 'uint128' }
    ],
    name: 'findBestPathFromAmountOut',
    outputs: [
      {
        components: [
          { internalType: 'address[]', name: 'route', type: 'address[]' },
          { internalType: 'address[]', name: 'pairs', type: 'address[]' },
          { internalType: 'uint256[]', name: 'binSteps', type: 'uint256[]' },
          {
            internalType: 'enum ILBRouter.Version[]',
            name: 'versions',
            type: 'uint8[]'
          },
          { internalType: 'uint128[]', name: 'amounts', type: 'uint128[]' },
          {
            internalType: 'uint128[]',
            name: 'virtualAmountsWithoutSlippage',
            type: 'uint128[]'
          },
          { internalType: 'uint128[]', name: 'fees', type: 'uint128[]' }
        ],
        internalType: 'struct LBQuoter.Quote',
        name: 'quote',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getFactoryV1',
    outputs: [{ internalType: 'address', name: 'factoryV1', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getFactoryV2_1',
    outputs: [
      { internalType: 'address', name: 'factoryV2_1', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getFactoryV2_2',
    outputs: [
      { internalType: 'address', name: 'factoryV2_2', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLegacyFactoryV2',
    outputs: [
      { internalType: 'address', name: 'legacyFactoryV2', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLegacyRouterV2',
    outputs: [
      { internalType: 'address', name: 'legacyRouterV2', type: 'address' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRouterV2_1',
    outputs: [{ internalType: 'address', name: 'routerV2_1', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRouterV2_2',
    outputs: [{ internalType: 'address', name: 'routerV2_2', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const
