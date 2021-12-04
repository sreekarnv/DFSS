// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
  string public name = 'Storage';
  uint public fileCount = 0;
  mapping(uint => File) public files;

  struct File {
    uint fileId;
    string fileHash;
    uint fileSize;
    string fileType;
    string fileName;
    string fileDescription;
    uint uploadTime;
    address payable uploader;
    address[] sharedUsers;
  }

  event FileUploaded(
    uint fileId,
    string fileHash,
    uint fileSize,
    string fileType,
    string fileName, 
    string fileDescription,
    uint uploadTime,
    address payable uploader
  );

  

  function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription) public {
    // Make sure the file hash exists
    require(bytes(_fileHash).length > 0);
    // Make sure file type exists
    require(bytes(_fileType).length > 0);
    // Make sure file description exists
    require(bytes(_fileDescription).length > 0);
    // Make sure file fileName exists
    require(bytes(_fileName).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));
    // Make sure file size is more than 0
    require(_fileSize>0);

    // Increment file id
    fileCount ++;

    address[] memory sharedUsers = new address[](1);
    sharedUsers[0] = msg.sender;

    // Add File to the contract
    files[fileCount] = File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, block.timestamp, payable(msg.sender), sharedUsers);
    // Trigger an event
    emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, block.timestamp, payable(msg.sender));
  }

  function addSharedUser(uint _fileId, address _user) public {
    require(_fileId>0);
    require(_user!=address(0));
    require(files[_fileId].fileId == _fileId);

    files[_fileId].sharedUsers.push(_user);
  }

  function getSharedUsers(uint fileIndex) public view returns (address[] memory)
  {
      return files[fileIndex].sharedUsers;
  }
}
