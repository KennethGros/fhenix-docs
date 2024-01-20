"use strict";(self.webpackChunkfhenix_docs=self.webpackChunkfhenix_docs||[]).push([[7245],{4834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=t(5893),a=t(1151);const i={},c="Permits & Access Control",o={id:"devdocs/Encryption and Privacy/Permits-Access-Control",title:"Permits & Access Control",description:"In a Fully Homomorphic Encryption (FHE) context, data stored in the contract's storage is encrypted.",source:"@site/docs/devdocs/Encryption and Privacy/Permits-Access-Control.md",sourceDirName:"devdocs/Encryption and Privacy",slug:"/devdocs/Encryption and Privacy/Permits-Access-Control",permalink:"/fhenix-docs/docs/devdocs/Encryption and Privacy/Permits-Access-Control",draft:!1,unlisted:!1,editUrl:"https://github.com/fhenixprotocol/fhenix-docs/main/docs/devdocs/Encryption and Privacy/Permits-Access-Control.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Catching Errors",permalink:"/fhenix-docs/docs/devdocs/FhenixJS/Catching Errors"},next:{title:"\ud83e\udd2b Privacy Pitfalls",permalink:"/fhenix-docs/docs/devdocs/Encryption and Privacy/Privacy-Web3"}},r={},h=[{value:"Permits",id:"permits",level:2},{value:"What is a Permit?",id:"what-is-a-permit",level:4},{value:"How to Generate a Permit",id:"how-to-generate-a-permit",level:4},{value:"Using an Access Token",id:"using-an-access-token",level:4},{value:"Storing and Loading Access Tokens",id:"storing-and-loading-access-tokens",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"permits--access-control",children:"Permits & Access Control"}),"\n",(0,s.jsxs)(n.p,{children:["In a Fully Homomorphic Encryption (FHE) context, data stored in the contract's storage is encrypted.\nTherefore, granting selective access to data becomes an essential part of access control.\nThis is done via the ",(0,s.jsx)(n.code,{children:"sealoutput"})," function, which seals the data in a manner that only the intended\nrecipient can decrypt and view it (or the ",(0,s.jsx)(n.code,{children:"decrypt"})," function, for less sensitive data). This approach ensures that\nencrypted data remains confidential and only accessible to authorized users."]}),"\n",(0,s.jsx)(n.p,{children:"Usually, Solidity contracts will expose their data using View functions.\nHowever, in the context of permissioned data this is challenging for us since view functions do not come\nwith any kind of mechanism to allow the contract to cryptographically verify that the caller is who he says he is -\nin the case of transactions this is done by verifying the signature on the data."}),"\n",(0,s.jsx)(n.p,{children:"This means that we have to create mechanisms that enable the contract to determine who can access the data and who can't."}),"\n",(0,s.jsx)(n.h2,{id:"permits",children:"Permits"}),"\n",(0,s.jsx)(n.p,{children:"Permits are a mechanism that allows the contract to cryptographically verify that the caller is who he says he is."}),"\n",(0,s.jsx)(n.p,{children:"Simply, they are a signed message that contains the caller's public key, which the contract can then use to verify that the caller is who he says he is."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"permits--access-control-eip-712",children:"Permits & Access Control (EIP-712)"}),"\n",(0,s.jsx)(n.p,{children:"Out-of-the-box, Fhenix Solidity libraries come with a basic access control scheme. This helps contracts perform a basic check for ownership of an account."}),"\n",(0,s.jsxs)(n.p,{children:["This makes it easy for contracts to add authentication & authorization to specific view functions, without having to reinvent the wheel every time. To learn more about why this can be important, and what EIP712 is, refer to our ",(0,s.jsx)(n.a,{href:"../fhevm-solidity/access-control.md",children:"fundamentals section on Access Control"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This page will cover how access tokens are created and used in FhenixJS."}),"\n",(0,s.jsx)(n.h4,{id:"what-is-a-permit",children:"What is a Permit?"}),"\n",(0,s.jsx)(n.p,{children:"In the context of Fhenix and blockchain, an access token refers to a signed JSON object that follows the EIP-712 standard. This token contains the necessary information, including a public key, that allows data reencryption in a smart contract environment. The inclusion of this public key into the access token enables a secure process of data re-encryption within a smart contract once the JSON object is signed by the user."}),"\n",(0,s.jsx)(n.h4,{id:"how-to-generate-a-permit",children:"How to Generate a Permit"}),"\n",(0,s.jsxs)(n.p,{children:["Access tokens are generated using the ",(0,s.jsx)(n.code,{children:"FhevmInstance.generateToken"})," method. This method requires a few parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," (required): An object containing the following properties:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verifyingContract"})," (required, string): The address of the contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," (optional, string): The name used in the EIP712 token."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"version"})," (optional, string): The version used in the EIP712 token."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"generateToken"})," method returns an object containing a keypair (publicKey and privateKey) and a token (EIP712 formatted)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const instance = await createInstance({ chainId, publicKey });\nconst encryptedParam = instance.generateToken({\n  name: 'Authentication',\n  verifyingContract: '0x1c786b8ca49D932AFaDCEc00827352B503edf16c',\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Behind the scenes, this function not only creates an access token, but also generates an ephemeral key that is used for decryption of the responses. "}),"\n",(0,s.jsx)(n.h4,{id:"using-an-access-token",children:"Using an Access Token"}),"\n",(0,s.jsx)(n.p,{children:"Once generated, the access token can be used in a variety of ways, such as being signed for data re-encryption in a smart contract or to retrieve balance information of a contract. Here's an example of using an access token for getting balance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const instance = await createInstance({ chainId, publicKey });\nconst token = instance.generateToken({\n  name: 'Authentication',\n  verifyingContract: '0x1c786b8ca49D932AFaDCEc00827352B503edf16c',\n});\nconst params = [userAddress, JSON.stringify(generatedToken.token)];\nconst sign = await window.ethereum.request({ method: 'eth_signTypedData_v4', params });\nconst response = await contract.balanceOf(token.publicKey, sign);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"storing-and-loading-access-tokens",children:"Storing and Loading Access Tokens"}),"\n",(0,s.jsxs)(n.p,{children:["Tokens can be stored for later use by using the ",(0,s.jsx)(n.code,{children:"FhevmInstance.setTokenSignature"})," method. This method allows you to store the signature of a public key for a specific contract. The ",(0,s.jsx)(n.code,{children:"FhevmInstance.getTokenSignature"})," method can then be used to fetch the stored public key and signature later."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Store signature\ninstance.setTokenSignature(contractAddress, sign);\n\n// Fetch public key and signature\nconst { publicKey, signature } = instance.getTokenSignature();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For batch operations or caching purposes, the ",(0,s.jsx)(n.code,{children:"FhevmInstance.serializeKeypairs"})," method is useful as it allows you to store contract keypairs in the user's LocalStorage. The method returns a mapping of contract addresses to their associated keypairs and signatures."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const keypairs = instance.serializeKeypairs();\nconsole.log(keypairs);\n"})}),"\n",(0,s.jsx)(n.p,{children:"This structure can then be used when reloading the instance"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const instance = await createInstance({ chainId, publicKey, keypairs });\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var s=t(7294);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);