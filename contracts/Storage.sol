// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
    string public name = "Storage";
    uint256 public fileCount = 0;
    mapping(uint256 => File) public files;

    struct File {
        uint256 fileId;
        string fileHash;
        uint256 fileSize;
        string fileType;
        string fileName;
        string fileDescription;
        uint256 uploadTime;
        address payable uploader;
        address[] sharedUsers;
    }

    event FileUploaded(
        uint256 fileId,
        string fileHash,
        uint256 fileSize,
        string fileType,
        string fileName,
        string fileDescription,
        uint256 uploadTime,
        address payable uploader
    );

    function uploadFile(
        string memory _fileHash,
        uint256 _fileSize,
        string memory _fileType,
        string memory _fileName,
        string memory _fileDescription
    ) public {
        require(bytes(_fileHash).length > 0);
        require(bytes(_fileType).length > 0);
        require(bytes(_fileDescription).length > 0);
        require(bytes(_fileName).length > 0);
        require(msg.sender != address(0));
        require(_fileSize > 0);

        fileCount++;

        address[] memory sharedUsers = new address[](1);
        sharedUsers[0] = msg.sender;

        files[fileCount] = File(
            fileCount,
            _fileHash,
            _fileSize,
            _fileType,
            _fileName,
            _fileDescription,
            block.timestamp,
            payable(msg.sender),
            sharedUsers
        );

        emit FileUploaded(
            fileCount,
            _fileHash,
            _fileSize,
            _fileType,
            _fileName,
            _fileDescription,
            block.timestamp,
            payable(msg.sender)
        );
    }

    function addSharedUser(uint256 _fileId, address _user) public {
        require(_fileId > 0);
        require(_user != address(0));
        require(files[_fileId].fileId == _fileId);

        files[_fileId].sharedUsers.push(_user);
    }

    function getSharedUsers(uint256 fileIndex)
        public
        view
        returns (address[] memory)
    {
        return files[fileIndex].sharedUsers;
    }
}
