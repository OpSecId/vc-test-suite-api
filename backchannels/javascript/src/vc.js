

export const issue_vc = async ({credential, options}) => {
    verifiableCredential = {}
    // Enter your code here doing the following:
    // 1. Validate the credential input, and ensure it meets the vcdm specification requirements
        // You MUST reject invalid inputs (negative test)
        // You MUST accept valid inputs (positive test)
        // For invalid input, raise an error
    // 2. Use your implementation to apply a securing mechanism to the credential
    // For implementations using an enveloping proof, you MUST ensure to return the decoded verifiable credential.
    return verifiableCredential;
};

export const verify_vc = async ({verifiableCredential, options}) => {
    verificationResults = {}
    // Enter your code here doing the following:
    // 1. Validate the vc input, and ensure it meets the vcdm specification requirements
        // You MUST reject invalid inputs (negative test)
        // You MUST accept valid inputs (positive test)
    // For invalid input, raise an error
    // 2. Use your implementation to verify the digital signature
    // 3. Use your implementation to validate supported features
    return verificationResults;
};

export const verify_vp = async ({verifiablePresentation, options}) => {
    verificationResults = {}
    // Enter your code here doing the following:
    // 1. Validate the vp input, and ensure it meets the vcdm specification requirements
        // You MUST reject invalid inputs (negative test)
        // You MUST accept valid inputs (positive test)
        // For invalid input, raise an error
    // 2. Use your implementation to verify the digital signature
    // 3. Use your implementation to validate supported features
    return verificationResults;
};
  