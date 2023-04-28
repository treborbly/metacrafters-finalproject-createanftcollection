/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftName, nftValue, nftSupply) {
    const nftData = { 
        "Name": nftName,
        "Value": nftValue,
        "Collection_Supply": nftSupply,
    }

    nftCollection.push([nftData.Name, nftData.Value, nftData.Collection_Supply]);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT Name: ${nftCollection[i][0]}`)
        console.log(`NFT Value: ${nftCollection[i][1]}`)
        console.log(`NFT Supply: ${nftCollection[i][2]}`)
    }
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`The total NFTs that we have minted is ${nftCollection.length}!`)
}

// call your functions below this line
mintNFT("First NFT", "$1000", 10);
mintNFT("Second NFT", "$500", 3);
mintNFT("Third NFT", "$50", 2);
mintNFT("4th NFT", "$40", 4)
mintNFT("5th NFT", "$30", 2);
mintNFT("6th NFT", "$20", 1);
listNFTs();
getTotalSupply();