const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
  let adoption;
  let expectedPetId = 10;

  before(async () => {
    adoption = await Adoption.deployed();
  });

  describe("adopting a pet and retrieving account addresses", async () => {
    before("adopt a pet using accounts[0]", async () => {
      user = accounts[0];
      await adoption.adopt(expectedPetId, { from: user });
      expectedAdopter = user;
    });

    it("can fetch the address of an owner by pet id", async () => {
      const adopterId = await adoption.adoptersNo(user);

      assert.equal(
        parseInt(adopterId),
        expectedPetId,
        "The owner of the adopted pet should be the first account."
      );
    });

    it("can fetch the collection of all pet owners' addresses", async () => {
      const adopters = await adoption.getAdopters();
      assert.equal(
        adopters[0],
        expectedAdopter,
        "The owner of the adopted pet should be in the collection."
      );
    });
  });
});
