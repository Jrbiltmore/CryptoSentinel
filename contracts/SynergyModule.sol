pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SynergyModule is Ownable {
    struct Synergy {
        uint256 gasReduction;
        uint256 stakingBonus;
        uint256 rewardMultiplier;
    }

    mapping(address => bool) private _synergyAddresses;
    mapping(address => Synergy) private _synergyDetails;
    address[] private _synergyAddressList;

    event SynergyGranted(address indexed beneficiary, Synergy synergy);
    event SynergyRevoked(address indexed beneficiary);

    function grantSynergy(address beneficiary, uint256 gasReduction, uint256 stakingBonus, uint256 rewardMultiplier) external onlyOwner {
        require(gasReduction >= 0 && gasReduction <= 100, "Gas reduction must be between 0 and 100");
        require(stakingBonus >= 0 && stakingBonus <= 100, "Staking bonus must be between 0 and 100");
        require(rewardMultiplier >= 0 && rewardMultiplier <= 100, "Reward multiplier must be between 0 and 100");

        Synergy memory synergy = Synergy(gasReduction, stakingBonus, rewardMultiplier);
        _synergyAddresses[beneficiary] = true;
        _synergyDetails[beneficiary] = synergy;
        _synergyAddressList.push(beneficiary);

        emit SynergyGranted(beneficiary, synergy);
    }

    function revokeSynergy(address beneficiary) external onlyOwner {
        _synergyAddresses[beneficiary] = false;
        delete _synergyDetails[beneficiary];
        emit SynergyRevoked(beneficiary);
    }

    function getSynergyDetails(address beneficiary) external view returns (Synergy memory) {
        return _synergyDetails[beneficiary];
    }

    function getSynergyAddressList() external view returns (address[] memory) {
        return _synergyAddressList;
    }

    function hasSynergy(address beneficiary) external view returns (bool) {
        return _synergyAddresses[beneficiary];
    }
}
