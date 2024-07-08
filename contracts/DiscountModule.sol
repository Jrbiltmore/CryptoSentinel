pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DiscountModule is Ownable {
    mapping(address => bool) private _discountedAddresses;
    mapping(address => uint8) private _discountRates;
    address[] private _discountedAddressList;

    event DiscountGranted(address indexed beneficiary, uint8 discountRate);
    event DiscountRevoked(address indexed beneficiary);

    function grantDiscount(address beneficiary, uint8 discountRate) external onlyOwner {
        require(discountRate > 0 && discountRate <= 100, "Discount rate must be between 1 and 100");
        _discountedAddresses[beneficiary] = true;
        _discountRates[beneficiary] = discountRate;
        _discountedAddressList.push(beneficiary);
        emit DiscountGranted(beneficiary, discountRate);
    }

    function revokeDiscount(address beneficiary) external onlyOwner {
        _discountedAddresses[beneficiary] = false;
        _discountRates[beneficiary] = 0;
        emit DiscountRevoked(beneficiary);
    }

    function getDiscountRate(address beneficiary) external view returns (uint8) {
        return _discountRates[beneficiary];
    }

    function getDiscountedAddressList() external view returns (address[] memory) {
        return _discountedAddressList;
    }

    function isDiscounted(address beneficiary) external view returns (bool) {
        return _discountedAddresses[beneficiary];
    }
}
