import * as vc from '@digitalbazaar/vc';
import jsigs from 'jsonld-signatures';

import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {cryptosuite as eddsaRdfc2022CryptoSuite} from
  '@digitalbazaar/eddsa-rdfc-2022-cryptosuite';

const seed = '00000000000000000000000000000000'
const keyPair = await Ed25519Multikey.generate(seed);

const cryptosuites = {
    'eddsa-rdfc-2022': eddsaRdfc2022CryptoSuite
};

export const issue_vc = async ({credential, options}) => {
    const suite = new DataIntegrityProof({
        signer: keyPair.signer(), cryptosuite: cryptosuites[options.cryptosuite]
      });
    const signedVC = await jsigs.sign(credential, {
        suite,
        purpose: new AssertionProofPurpose(),
        documentLoader
      });
    console.log(JSON.stringify(signedVC, null, 2));
    return signedVC;
};

export const verify_vc = async ({vc, options}) => {
    const result  = await vc.verifyCredential({credential, suite, documentLoader});
};

export const verify_vp = async ({vp, options}) => {
    const result  = await vc.verify({presentation, challenge, suite, documentLoader});
};
  