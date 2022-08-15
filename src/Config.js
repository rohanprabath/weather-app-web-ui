const config = {
    development: {
      apiUrl: "https://localhost:7111",
      serverUrl: "http://localhost:3000"
    },
    test: {
        apiUrl: "",
        serverUrl: ""
    },
    production: {
        apiUrl: "",
        serverUrl: ""
    }
};
  
exports.get = function get(env) {
    return config[env] || config.development;
};
  