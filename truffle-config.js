module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  compilers: {
    solc: {
      version: "0.8.0",
      parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: true,
          runs: 2   // Optimize for how many times you intend to run the code
        },
      },
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  },
  mocha: {
    useColors: true
  }
};
