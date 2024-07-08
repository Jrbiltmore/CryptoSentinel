pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./ArmyToken.sol";
import "./NavyToken.sol";
import "./AirForceToken.sol";
import "./MarineCorpsToken.sol";
import "./CoastGuardToken.sol";
import "./SpaceForceToken.sol";
import "./ReserveToken.sol";

contract TokenFactory is Ownable {
    enum TokenType { Army, Navy, AirForce, MarineCorps, CoastGuard, SpaceForce, Reserve }
    mapping(TokenType => address) public tokenAddresses;

    event TokenCreated(TokenType indexed tokenType, address tokenAddress);

    function createToken(TokenType tokenType) external onlyOwner {
        require(tokenAddresses[tokenType] == address(0), "Token already created");

        address tokenAddress;
        if (tokenType == TokenType.Army) {
            tokenAddress = address(new ArmyToken());
        } else if (tokenType == TokenType.Navy) {
            tokenAddress = address(new NavyToken());
        } else if (tokenType == TokenType.AirForce) {
            tokenAddress = address(new AirForceToken());
        } else if (tokenType == TokenType.MarineCorps) {
            tokenAddress = address(new MarineCorpsToken());
        } else if (tokenType == TokenType.CoastGuard) {
            tokenAddress = address(new CoastGuardToken());
        } else if (tokenType == TokenType.SpaceForce) {
            tokenAddress = address(new SpaceForceToken());
        } else if (tokenType == TokenType.Reserve) {
            tokenAddress = address(new ReserveToken());
        }

        tokenAddresses[tokenType] = tokenAddress;
        emit TokenCreated(tokenType, tokenAddress);
    }

    function getTokenAddress(TokenType tokenType) external view returns (address) {
        return tokenAddresses[tokenType];
    }
}
