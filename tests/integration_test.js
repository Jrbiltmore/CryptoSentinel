const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Integration Tests", function () {
    let deployer, beneficiary1, beneficiary2;
    let ArmyToken, NavyToken, AirForceToken, MarineCorpsToken, CoastGuardToken, SpaceForceToken, ReserveToken;
    let DiscountModule, SynergyModule, Governance;

    beforeEach(async function () {
        [deployer, beneficiary1, beneficiary2] = await ethers.getSigners();

        const ArmyTokenFactory = await ethers.getContractFactory("ArmyToken");
        ArmyToken = await ArmyTokenFactory.deploy();
        await ArmyToken.deployed();

        const NavyTokenFactory = await ethers.getContractFactory("NavyToken");
        NavyToken = await NavyTokenFactory.deploy();
        await NavyToken.deployed();

        const AirForceTokenFactory = await ethers.getContractFactory("AirForceToken");
        AirForceToken = await AirForceTokenFactory.deploy();
        await AirForceToken.deployed();

        const MarineCorpsTokenFactory = await ethers.getContractFactory("MarineCorpsToken");
        MarineCorpsToken = await MarineCorpsTokenFactory.deploy();
        await MarineCorpsToken.deployed();

        const CoastGuardTokenFactory = await ethers.getContractFactory("CoastGuardToken");
        CoastGuardToken = await CoastGuardTokenFactory.deploy();
        await CoastGuardToken.deployed();

        const SpaceForceTokenFactory = await ethers.getContractFactory("SpaceForceToken");
        SpaceForceToken = await SpaceForceTokenFactory.deploy();
        await SpaceForceToken.deployed();

        const ReserveTokenFactory = await ethers.getContractFactory("ReserveToken");
        ReserveToken = await ReserveTokenFactory.deploy();
        await ReserveToken.deployed();

        const DiscountModuleFactory = await ethers.getContractFactory("DiscountModule");
        DiscountModule = await DiscountModuleFactory.deploy();
        await DiscountModule.deployed();

        const SynergyModuleFactory = await ethers.getContractFactory("SynergyModule");
        SynergyModule = await SynergyModuleFactory.deploy();
        await SynergyModule.deployed();

        const GovernanceFactory = await ethers.getContractFactory("Governance");
        Governance = await GovernanceFactory.deploy();
        await Governance.deployed();
    });

    it("Should integrate discount module with token contracts", async function () {
        await DiscountModule.grantDiscount(beneficiary1.address, 20);
        const transferAmount = ethers.utils.parseUnits("100", 18);

        await ArmyToken.transfer(beneficiary1.address, transferAmount);
        const discount = transferAmount.mul(20).div(100);
        const expectedAmount = transferAmount.sub(discount);

        expect(await ArmyToken.balanceOf(beneficiary1.address)).to.equal(expectedAmount);
    });

    it("Should integrate synergy module with token contracts", async function () {
        await SynergyModule.grantSynergy(beneficiary2.address, 10, 15, 5);
        const transferAmount = ethers.utils.parseUnits("100", 18);

        await NavyToken.transfer(beneficiary2.address, transferAmount);
        const synergy = await SynergyModule.getSynergyDetails(beneficiary2.address);

        expect(synergy.gasReduction).to.equal(10);
        expect(synergy.stakingBonus).to.equal(15);
        expect(synergy.rewardMultiplier).to.equal(5);
    });

    it("Should execute governance proposals", async function () {
        const proposalDescription = "Proposal to increase staking rewards by 5%";
        await Governance.connect(beneficiary1).createProposal(proposalDescription);

        await Governance.connect(beneficiary1).vote(0);
        await Governance.connect(beneficiary2).vote(0);

        const proposal = await Governance.getProposal(0);
        expect(proposal.voteCount).to.equal(2);

        await Governance.executeProposal(0);
        expect((await Governance.getProposal(0)).executed).to.be.true;
    });
});
