import {generateErrorObject} from './';
describe('test generateErrorObject working fine', () => {
  it('return default errorObject when no params provided', () => {
    const expected = {
      errorObject: JSON.stringify({
        status: '500',
        message: 'FAILED',
        data: {},
      }),
    };
    const result = generateErrorObject();
    expect(result).toStrictEqual(expected);
  });

  it('return default status and message when message provided', () => {
    const message = 'internal server error';
    const expected = {
      errorObject: JSON.stringify({
        status: '500',
        message,
        data: {},
      }),
    };
    const result = generateErrorObject({message});
    expect(result).toStrictEqual(expected);
  });

  it('return default message and status when status provided', () => {
    const status = '400';
    const expected = {
      errorObject: JSON.stringify({
        status,
        message: 'FAILED',
        data: {},
      }),
    };
    const result = generateErrorObject({status});
    expect(result).toStrictEqual(expected);
  });

  it('return message and status when provided', () => {
    const status = '400';
    const message = 'internal server error';
    const expected = {
      errorObject: JSON.stringify({
        status,
        message,
        data: {},
      }),
    };
    const result = generateErrorObject({status, message});
    expect(result).toStrictEqual(expected);
  });

  describe('return status and message if errorObject provided have non null status and message', () => {
    const expected = {
      errorObject: JSON.stringify({
        status: '404',
        message: 'Page Not Found',
        data: {message: 'Page Not Found'},
      }),
    };

    it('return expected when data.payload.message provided ', () => {
      const error = {
        status: '404',
        data: {payload: {message: 'Page Not Found'}},
      };
      const result = generateErrorObject({error});
      expect(result).toStrictEqual(expected);
    });

    it('return expected when data.message provided ', () => {
      const error = {
        status: '404',
        data: {message: 'Page Not Found'},
      };
      const result = generateErrorObject({error});
      expect(result).toStrictEqual(expected);
    });
  });

  it('return default status when error object provided with message', () => {
    const expected = {
      errorObject: JSON.stringify({
        status: '500',
        message: 'Page Not Found',
        data: {message: 'Page Not Found'},
      }),
    };
    const error = {
      data: {payload: {message: 'Page Not Found'}},
    };
    const result = generateErrorObject({error});
    expect(result).toStrictEqual(expected);
  });

  it('return default message when error object provided with status', () => {
    const expected = {
      errorObject: JSON.stringify({status: '404', message: 'FAILED', data: {}}),
    };
    const error = {
      status: '404',
    };
    const result = generateErrorObject({error});
    expect(result).toStrictEqual(expected);
  });

  it('return data with data: {errorFrom} attribute if provided', () => {
    const expected = {
      data: {errorFrom: 'fe_error'},
      errorObject: JSON.stringify({status: '404', message: 'FAILED', data: {}}),
    };
    const error = {
      status: '404',
    };
    const result = generateErrorObject({errorFrom: 'fe_error', error});
    expect(result).toStrictEqual(expected);
  });
});
