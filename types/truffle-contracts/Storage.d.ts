/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import {EventData, PastEventOptions} from "web3-eth-contract";

export interface StorageContract extends Truffle.Contract<StorageInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<StorageInstance>;
}

export interface FileUploaded {
  name: "FileUploaded";
  args: {
    fileId: BN;
    fileHash: string;
    fileSize: BN;
    fileType: string;
    fileName: string;
    fileDescription: string;
    uploadTime: BN;
    uploader: string;
    0: BN;
    1: string;
    2: BN;
    3: string;
    4: string;
    5: string;
    6: BN;
    7: string;
  };
}

type AllEvents = FileUploaded;

export interface StorageInstance extends Truffle.ContractInstance {
  fileCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  files(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: BN;
    1: string;
    2: BN;
    3: string;
    4: string;
    5: string;
    6: BN;
    7: string;
  }>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  uploadFile: {
    (
      _fileHash: string,
      _fileSize: number | BN | string,
      _fileType: string,
      _fileName: string,
      _fileDescription: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _fileHash: string,
      _fileSize: number | BN | string,
      _fileType: string,
      _fileName: string,
      _fileDescription: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _fileHash: string,
      _fileSize: number | BN | string,
      _fileType: string,
      _fileName: string,
      _fileDescription: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _fileHash: string,
      _fileSize: number | BN | string,
      _fileType: string,
      _fileName: string,
      _fileDescription: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addSharedUser: {
    (
      _fileId: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _fileId: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _fileId: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _fileId: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getSharedUsers(
    fileIndex: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  methods: {
    fileCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    files(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: BN;
      1: string;
      2: BN;
      3: string;
      4: string;
      5: string;
      6: BN;
      7: string;
    }>;

    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    uploadFile: {
      (
        _fileHash: string,
        _fileSize: number | BN | string,
        _fileType: string,
        _fileName: string,
        _fileDescription: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _fileHash: string,
        _fileSize: number | BN | string,
        _fileType: string,
        _fileName: string,
        _fileDescription: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _fileHash: string,
        _fileSize: number | BN | string,
        _fileType: string,
        _fileName: string,
        _fileDescription: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _fileHash: string,
        _fileSize: number | BN | string,
        _fileType: string,
        _fileName: string,
        _fileDescription: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    addSharedUser: {
      (
        _fileId: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _fileId: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _fileId: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _fileId: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getSharedUsers(
      fileIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
