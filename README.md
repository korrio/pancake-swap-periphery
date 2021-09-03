# Pancake Router

## Prepare INIT_CODE_PAIR_HASH
- Get `INIT_CODE_PAIR_HASH` from your `PancakeFactory` contract
- Put `INIT_CODE_PAIR_HASH` to `pairFor` function's 4th parameter in `contracts/libraries/PancakeLibrary.sol`
- Example:
`
    function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        pair = address(uint(keccak256(abi.encodePacked(
                hex'ff',
                factory,
                keccak256(abi.encodePacked(token0, token1)),
                hex'f098791c4153da2a5ea692d792b24b7cf1a55fb2be3686f804304b50d0a9b5e3' // init code hash
            ))));
    }
`

## Instruction
- `truffle init`
- Press N, enter, N, enter.
- add `.secret` to root directory of project
- Prepare `truffle-config.js` by adding `kovan` provider
- `truffle compile`
- `truffle deploy --network kovan`
- `truffle run verify PancakeFactory --network kovan`



