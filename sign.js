exports.default = async function(configuration) {
  //console.log(`config:\n${JSON.stringify(configuration, null, 4)}`)
  console.log(`env test - secret test ${process.env.SECRET_TEST}`)

  require("child_process").execSync(
    `azuresigntool sign -kvu ${process.env.SIGNING_VAULT_URL} -kvi ${process.env.SIGNING_CLIENT_ID} -kvs ${process.env.SIGNING_CLIENT_SECRET} -kvc ${process.env.SIGNING_CERT_NAME} -fd ${configuration.hash} -du ${configuration.site} -tr http://timestamp.digicert.com ${configuration.path}`,
    {
      stdio: "inherit"
    }
  );
};
