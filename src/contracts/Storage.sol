// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
  string public name = 'Storage';

  uint public fileCount = 0;
  mapping(uint => File) public files;

  struct File {
    uint fileId;

    string fileHash;
    string fileType;
    string fileName;
    string fileDescription;

    uint fileSize;
    uint uploadTime;

    address payable uploader;
    address[] sharedUsers;
  }

  event FileUploaded(
    uint fileId,

    string fileHash,
    string fileType,
    string fileName, 
    string fileDescription,

    uint fileSize,
    uint uploadTime,
    
    address payable uploader
  );

  event FileRenamed(
    uint fileId,
    string fileName
  );

  event FileShared(
    uint fileId,
    address sharedWith
  );

  function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription) public {
    require(bytes(_fileHash).length > 0);
    require(bytes(_fileType).length > 0);
    require(bytes(_fileDescription).length > 0);
    require(bytes(_fileName).length > 0);
    
    require(_fileSize>0);

    require(msg.sender!=address(0));

    fileCount ++;

    address[] memory sharedUsers = new address[](1);
    sharedUsers[0] = msg.sender;

    files[fileCount] = File(fileCount, _fileHash, _fileType, _fileName, _fileDescription, _fileSize, block.timestamp, payable(msg.sender), sharedUsers);

    emit FileUploaded(fileCount, _fileHash, _fileType, _fileName, _fileDescription, _fileSize, block.timestamp, payable(msg.sender));
  }

  function renameFile(uint _fileId, string memory _fileName) public {
    require(_fileId > 0);
    require(_fileId <= fileCount);
    
    require(bytes(_fileName).length > 0);

    require(payable(msg.sender) == files[_fileId].uploader);

    files[_fileId].fileName = _fileName;

    emit FileRenamed(_fileId, _fileName);
  }

  function addSharedUser(uint _fileId, address _user) public {
    require(_fileId>0);
    require(_fileId <= fileCount);

    require(_user!=address(0));

    require(payable(msg.sender) == files[_fileId].uploader);

    files[_fileId].sharedUsers.push(_user);

    emit FileShared(_fileId, _user);
  }

  function getSharedUsers(uint fileIndex) public view returns (address[] memory)  {
      return files[fileIndex].sharedUsers;
  }
}
