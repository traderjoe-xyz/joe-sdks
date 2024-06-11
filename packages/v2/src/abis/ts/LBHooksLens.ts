export const LBHooksLensABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'lbHooksManager',
        type: 'address'
      },
      { internalType: 'address', name: 'masterChef', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
    name: 'getActiveId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'pairs', type: 'address[]' },
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256[][]', name: 'ids', type: 'uint256[][]' }
    ],
    name: 'getBatchHooksData',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'hooks',
                type: 'address'
              },
              {
                internalType: 'bool',
                name: 'beforeSwap',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterSwap', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'beforeMint',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterMint', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBurn',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterBurn', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBatchTransferFrom',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterBatchTransferFrom',
                type: 'bool'
              }
            ],
            internalType: 'struct Hooks.Parameters',
            name: 'hooksParameters',
            type: 'tuple'
          },
          {
            internalType: 'enum ILBHooksManager.LBHooksType',
            name: 'hooksType',
            type: 'uint8'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'decimals',
                type: 'uint256'
              },
              { internalType: 'string', name: 'symbol', type: 'string' }
            ],
            internalType: 'struct LBHooksLens.Token',
            name: 'rewardToken',
            type: 'tuple'
          },
          { internalType: 'uint256', name: 'pid', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'moePerSecond',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'activeId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeStart',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeEnd',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'pendingRewards',
            type: 'uint256'
          }
        ],
        internalType: 'struct LBHooksLens.HooksRewarderData[]',
        name: 'rewarderData',
        type: 'tuple[]'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'hooks',
                type: 'address'
              },
              {
                internalType: 'bool',
                name: 'beforeSwap',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterSwap', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'beforeMint',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterMint', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBurn',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterBurn', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBatchTransferFrom',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterBatchTransferFrom',
                type: 'bool'
              }
            ],
            internalType: 'struct Hooks.Parameters',
            name: 'hooksParameters',
            type: 'tuple'
          },
          {
            internalType: 'enum ILBHooksManager.LBHooksType',
            name: 'hooksType',
            type: 'uint8'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'decimals',
                type: 'uint256'
              },
              { internalType: 'string', name: 'symbol', type: 'string' }
            ],
            internalType: 'struct LBHooksLens.Token',
            name: 'rewardToken',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'rewardPerSecond',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastUpdateTimestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'endTimestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'remainingRewards',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'activeId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeStart',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeEnd',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'pendingRewards',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'isStarted', type: 'bool' },
          { internalType: 'bool', name: 'isEnded', type: 'bool' }
        ],
        internalType: 'struct LBHooksLens.ExtraHooksRewarderData[]',
        name: 'extraRewarderData',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'rewarder', type: 'address' }],
    name: 'getExtraHooks',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'hooks', type: 'address' },
          { internalType: 'bool', name: 'beforeSwap', type: 'bool' },
          { internalType: 'bool', name: 'afterSwap', type: 'bool' },
          {
            internalType: 'bool',
            name: 'beforeFlashLoan',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'afterFlashLoan',
            type: 'bool'
          },
          { internalType: 'bool', name: 'beforeMint', type: 'bool' },
          { internalType: 'bool', name: 'afterMint', type: 'bool' },
          { internalType: 'bool', name: 'beforeBurn', type: 'bool' },
          { internalType: 'bool', name: 'afterBurn', type: 'bool' },
          {
            internalType: 'bool',
            name: 'beforeBatchTransferFrom',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'afterBatchTransferFrom',
            type: 'bool'
          }
        ],
        internalType: 'struct Hooks.Parameters',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
    name: 'getHooks',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'hooks', type: 'address' },
          { internalType: 'bool', name: 'beforeSwap', type: 'bool' },
          { internalType: 'bool', name: 'afterSwap', type: 'bool' },
          {
            internalType: 'bool',
            name: 'beforeFlashLoan',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'afterFlashLoan',
            type: 'bool'
          },
          { internalType: 'bool', name: 'beforeMint', type: 'bool' },
          { internalType: 'bool', name: 'afterMint', type: 'bool' },
          { internalType: 'bool', name: 'beforeBurn', type: 'bool' },
          { internalType: 'bool', name: 'afterBurn', type: 'bool' },
          {
            internalType: 'bool',
            name: 'beforeBatchTransferFrom',
            type: 'bool'
          },
          {
            internalType: 'bool',
            name: 'afterBatchTransferFrom',
            type: 'bool'
          }
        ],
        internalType: 'struct Hooks.Parameters',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'pair', type: 'address' },
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }
    ],
    name: 'getHooksData',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'hooks',
                type: 'address'
              },
              {
                internalType: 'bool',
                name: 'beforeSwap',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterSwap', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'beforeMint',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterMint', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBurn',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterBurn', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBatchTransferFrom',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterBatchTransferFrom',
                type: 'bool'
              }
            ],
            internalType: 'struct Hooks.Parameters',
            name: 'hooksParameters',
            type: 'tuple'
          },
          {
            internalType: 'enum ILBHooksManager.LBHooksType',
            name: 'hooksType',
            type: 'uint8'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'decimals',
                type: 'uint256'
              },
              { internalType: 'string', name: 'symbol', type: 'string' }
            ],
            internalType: 'struct LBHooksLens.Token',
            name: 'rewardToken',
            type: 'tuple'
          },
          { internalType: 'uint256', name: 'pid', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'moePerSecond',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'activeId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeStart',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeEnd',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'pendingRewards',
            type: 'uint256'
          }
        ],
        internalType: 'struct LBHooksLens.HooksRewarderData',
        name: 'rewarderData',
        type: 'tuple'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'hooks',
                type: 'address'
              },
              {
                internalType: 'bool',
                name: 'beforeSwap',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterSwap', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterFlashLoan',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'beforeMint',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterMint', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBurn',
                type: 'bool'
              },
              { internalType: 'bool', name: 'afterBurn', type: 'bool' },
              {
                internalType: 'bool',
                name: 'beforeBatchTransferFrom',
                type: 'bool'
              },
              {
                internalType: 'bool',
                name: 'afterBatchTransferFrom',
                type: 'bool'
              }
            ],
            internalType: 'struct Hooks.Parameters',
            name: 'hooksParameters',
            type: 'tuple'
          },
          {
            internalType: 'enum ILBHooksManager.LBHooksType',
            name: 'hooksType',
            type: 'uint8'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'decimals',
                type: 'uint256'
              },
              { internalType: 'string', name: 'symbol', type: 'string' }
            ],
            internalType: 'struct LBHooksLens.Token',
            name: 'rewardToken',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'rewardPerSecond',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastUpdateTimestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'endTimestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'remainingRewards',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'activeId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeStart',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'rangeEnd',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'pendingRewards',
            type: 'uint256'
          },
          { internalType: 'bool', name: 'isStarted', type: 'bool' },
          { internalType: 'bool', name: 'isEnded', type: 'bool' }
        ],
        internalType: 'struct LBHooksLens.ExtraHooksRewarderData',
        name: 'extraRewarderData',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'rewarder', type: 'address' }],
    name: 'getLBHooksType',
    outputs: [
      {
        internalType: 'enum ILBHooksManager.LBHooksType',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'pid', type: 'uint256' }],
    name: 'getMoePerSecond',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'rewarder', type: 'address' },
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }
    ],
    name: 'getPendingRewards',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'rewarder', type: 'address' }],
    name: 'getPid',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'extraRewarder',
        type: 'address'
      }
    ],
    name: 'getRemainingRewards',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'rewarder', type: 'address' }],
    name: 'getRewardToken',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'token', type: 'address' },
          {
            internalType: 'uint256',
            name: 'decimals',
            type: 'uint256'
          },
          { internalType: 'string', name: 'symbol', type: 'string' }
        ],
        internalType: 'struct LBHooksLens.Token',
        name: 'rewardToken',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'rewarder', type: 'address' }],
    name: 'getRewardedRange',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'extraRewarder',
        type: 'address'
      }
    ],
    name: 'getRewarderParameter',
    outputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const
