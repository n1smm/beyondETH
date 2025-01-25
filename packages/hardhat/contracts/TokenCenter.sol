pragma solidity ^0.8.22;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

//LOT - layer one token
//LTT - layer two token - this have asociation to LOT

contract	TokenCenter is ERC721, Ownable 
{

	///EVENTS
	event	Minted(uint256 tokenId, address indexed holder);
	event	Transferred(uint256 tokenId, address indexed holder, address indexed to);


	///ERRORS


	///MODIFIERS


	///VARS

	//content associated with the token
	struct LayerOneInfo
	{
		string	fullName;
		string	date;
	}
	//storing owners of tokens
	// mapping(uint256 => address) layerOneBank; // --- not neccesary layerOneToken.ownerOf(token)
	//storing content of tokens
	mapping(uint256 => LayerOneInfo) public layerOneInfoBank;
	//number of LTT connected to each LOT
	mapping(uint256 => uint256) public	LLTStored;
	//price of LOT
	uint256	public priceLOT = 0.0001 * 10**18;
	//id state of LOT
	uint256	private _tokenCountLOT;



	///FUNCTIONS

    constructor(address initialOwner)
        ERC721("layerOneToken", "LOT")
        Ownable(initialOwner)
    {}

	///			LAYER ONE

	//create LOT token
	function mintTokenOne(string memory _name, string memory _date) public payable
	{
		require(msg.value >= priceLOT, "Sorry, you sent insufficient funds for transaction");
		uint256 refund = msg.value - priceLOT;
		if (refund > 0)
			payable(msg.sender).transfer(refund);

		uint256 tokenId = ++_tokenCountLOT;
		_safeMint(msg.sender, tokenId);
		layerOneInfoBank[tokenId] = LayerOneInfo({
			fullName: _name,
			date: _date
		});
		emit Minted(tokenId, msg.sender);
	}
	
	//transfer LOT token
	function transferOwnership(uint256 tokenId, address to) external 
	{
		require(ownerOf(tokenId) == msg.sender, "you are not the holder of NFT");
		_transfer(msg.sender, to, tokenId);
		emit Transferred(tokenId, msg.sender, to);
	}

	//set new price for LOT tokens
	function setPrice(uint256 newPrice) external onlyOwner
	{
		priceLOT = newPrice;
	}
	
	//withdraw funds form minting
	function withdraw() external onlyOwner
	{
		payable(owner()).transfer(address(this).balance);
	}

	//see info about LOT token
	function getL1Name(uint256 tokenId) external view returns(string memory)
	{
		require(_ownerOf(tokenId) != address(0), "This Star is not populated yet");
		return (layerOneInfoBank[tokenId].fullName);
	}
	function getL1Date(uint256 tokenId) external view returns(string memory)
	{
		require(_ownerOf(tokenId) != address(0), "This Star is not populated yet");
		return (layerOneInfoBank[tokenId].date);
	}


	///		INTERACTION WITH LTTs
	//increment LTTs sotored on one LOT
	function incrementLLT(uint256 tokenId) external
	{
		LLTStored[tokenId]++;
	}
	//get LTTs stored for one LOT
	function getLLTperLOT(uint256 tokenId) external view returns(uint256)
	{
		return(LLTStored[tokenId]);
	}


}
