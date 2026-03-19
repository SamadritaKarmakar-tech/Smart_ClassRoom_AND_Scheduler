import { BaseError } from './baseError.js';
import { StatusCodes } from 'http-status-codes';

export class NotImplementedError extends BaseError {
  constructor(message) {
    super(
      'Not Implemented Error',
      message,
      Number(StatusCodes.NOT_IMPLEMENTED)
    );
  }
}
