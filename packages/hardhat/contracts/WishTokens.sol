pragma solidity ^0.8.22;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./TokenCenter.sol";


//LOT - layer one token
//LTT - layer two token - this have association with LOT
// only uint256 LTTLimit number of LLT tokens allowed per 1 LOT

contract	WishTokens is ERC721, Ownable
{

	///EVENTS
	event	Minted(uint256 tokenId, address indexed holder);
	event	Transferred(uint256 tokenId, address indexed holder, address indexed to);


	///VARS

	//storing owners
	// mapping(uint256 => address) public layerTwoBank;
	//storing content
	mapping(uint256 => string) public layerTwoInfoBank;
	//connection to appropriate LOT token
	mapping(uint256 => uint256) public layerTolayerConnection;
	//price of LTT
	uint256	public	priceLTT = 0.0001 * 10**18;
	//id state of LTT
	uint256	private	_tokenCountLTT;
	//max LLT tokens for one LOT
	uint256	private	LTTLimit = 2;

	//address to TokenCenter
	address public tokenCenterContract;
	





	///FUNCTIONS

	constructor(address initialOwner, address _TokenCenterContract)
	ERC721("LayerTwoToken", "LTT")
	Ownable(initialOwner)
	{
		tokenCenterContract = _TokenCenterContract;
	}


	///		LAYER TWO

	//create layer two token
	function mintTokenTwo(string memory wish, uint256 LOTid) public payable
	{
		require(msg.value >= priceLTT, "Sorry, you sent insufficient funds for transaction");
		uint256 refund = msg.value - priceLTT;
		if (refund > 0)
			payable(msg.sender).transfer(refund);

		TokenCenter tokenCenter = TokenCenter(tokenCenterContract);
		require(IERC721(tokenCenterContract).ownerOf(LOTid) != address(0), "No star exist for your wish");
		
		require(tokenCenter.getLLTperLOT(LOTid) < LTTLimit, "No more wishesh can be made at this time");
		// require(IERC721(tokenCenterContract).getLLTperLOT(LOTid) <= LTTLimit, "No more wishesh can be made at this time");
		uint256 tokenId = ++_tokenCountLTT;
		tokenCenter.incrementLLT(LOTid);
		// IERC721(tokenCenterContract).incrementLLT(LOTid);
		_safeMint(msg.sender, tokenId);
		layerTwoInfoBank[tokenId] = wish;
		layerTolayerConnection[tokenId] = LOTid;
		emit Minted(tokenId, msg.sender);
	}		

	//transfer LTT token
	function transferOwnership(uint256 tokenId, address to) external 
	{
		require(ownerOf(tokenId) == msg.sender, "you are not the holder of NFT");
		_transfer(msg.sender, to, tokenId);
		emit Transferred(tokenId, msg.sender, to);
	}

	//set new price for LTT tokens
	function setPrice(uint256 newPrice) external onlyOwner
	{
		priceLTT = newPrice;
	}

	//withdraw funds form minting
	function withdraw() external onlyOwner
	{
		payable(owner()).transfer(address(this).balance);
	}

	function getLOTconnectedID(uint256 tokenId) public view returns(uint256)
	{
		require(_ownerOf(tokenId) != address(0), "This Wish does not exist");
		return(layerTolayerConnection[tokenId]);
	}


}
