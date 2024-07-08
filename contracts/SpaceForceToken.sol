pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SpaceForceToken is ERC20, Ownable {
    uint256 private constant _initialSupply = 1000000 * (10 ** uint256(decimals()));
    mapping(address => bool) private _discountedAddresses;
    mapping(address => uint8) private _discountRates;
    address[] private _discountedAddressList;

    event DiscountGranted(address indexed beneficiary, uint8 discountRate);
    event DiscountRevoked(address indexed beneficiary);
    event TokensBurned(address indexed burner, uint256 amount);

    constructor() ERC20("SpaceForceToken", "SFT") {
        _mint(msg.sender, _initialSupply);
    }

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

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        if (_discountedAddresses[msg.sender]) {
            uint256 discount = (amount * _discountRates[msg.sender]) / 100;
            amount -= discount;
        }
        return super.transfer(recipient, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
        emit TokensBurned(msg.sender, amount);
    }

    function getDiscountedAddressList() external view returns (address[] memory) {
        return _discountedAddressList;
    }
}
