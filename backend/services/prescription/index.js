const app = require('./app');
const vaultService = require('./app/services/vaultService.js');

async function main() {
    try {
        await vaultService.getJwtRsaPrivateKey();
        await vaultService.getJwtRsaPublicKey();
    } catch (error) {
        console.error(error);
    }
}

main().then(() => {
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
});
