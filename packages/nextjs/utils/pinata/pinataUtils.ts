import * as dotenv from "dotenv";
dotenv.config();
import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({	
	// pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMGU2ZWQ2MC05NTZkLTQ2NzMtODMxNi1mZTllYzFjZTViOWUiLCJlbWFpbCI6InRqYXouanV2YW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijk3NTJkNGU1Njg4ZjBhMGI2MTY1Iiwic2NvcGVkS2V5U2VjcmV0IjoiNGQ2ODFjNmJlMzJkOGVkZmY1M2E5OTRhMDZjOWNmZjY1YWU4MjkzNDAyMzMyNzUyYjM4OWQ0ZGE4YzgyOWRkZSIsImV4cCI6MTc2OTM2NjQ3NX0.BO9Gp5B7pImLw4rh9mvaPlrt99PVwdnxUyFFx9z309E",
	// pinataGateway: "violet-charming-swan-287.mypinata.cloud",
	pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT || "",
	pinataGateway: process.env.NEXT_PUBLIC_PINATA_GATEWAY_DOMAIN || "",
	// process.env.PINATA_API_KEY || "",
	// process.env.PINATA_SECRET_API_KEY	|| ""
});


export const uploadJsonToIPFS = async (jsonObject: object): Promise<string> => {
    try {
		// const response = JSON.stringify(jsonObject);
        const response = await pinata.upload.json(jsonObject);
        console.log("JSON uploaded to IPFS:", response);
        return response.IpfsHash;
		// return (response);
    } catch (error) {
        console.error("Error uploading JSON to IPFS:", error);
        throw new Error("Failed to upload JSON to IPFS");
    }
};

export const getJsonFromIPFS = async (ipfsHash: string): Promise<object> => {
	try {
		const response = await pinata.gateways.get(ipfsHash);
		console.log("JSON fetched from IPFS:", response);
		return response;
	} catch (error) {
		console.error("Error fetching JSON from IPFS:", error);
		throw new Error("Failed to fetch JSON from IPFS");
	}
};

// export const uploadJsontoIPFS = async (
// 	jsonObject: object,
// 	metadata?: PinataMetadata
// ): Promise<string> => {
// 	try {
// 		const options = metadata
// 			? { pinataMetadata: metadata }
// 			: undefined;

// 		const response = await pinata.pinJSONToIPFS(jsonObject, options);
// 		console.log("Uploaded to IPFS: ", response.IpfsHash);
// 		return response.IpfsHash;
// 	} catch (error) {
// 		console.error("Error uploading to IPFS: ", error);
// 		throw new Error("Error uploading to IPFS");
// 	}
// };
