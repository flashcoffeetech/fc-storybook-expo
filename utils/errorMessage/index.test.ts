import {Alert} from 'react-native';
import {alertErrorMessage, alertFailureReason, generateErrorMessage} from '.';

jest.mock('react-native', () => {
  return {
    Alert: {
      alert: jest.fn(),
    },
  };
});

describe('test generateErrorMessage', () => {
  it('testing return default message for both errorMessage & defaultErrorMessage when error not provided', () => {
    const defaultMessage = 'default';
    const error: any = null;

    const expected = {
      errorMessage: defaultMessage,
      defaultErrorMessage: defaultMessage,
    };
    const result = generateErrorMessage(error, defaultMessage);

    expect(result).toStrictEqual(expected);
  });
  it('testing return errorCode with errorCode for errorMessage & defaultMessage for defaultErrorMessage when error object with only errorCode provided', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: 'PAY_001',
        },
      },
    };

    const expected = {
      errorMessage: 'errorCode.PAY_001',
      defaultErrorMessage: defaultMessage,
    };
    const result = generateErrorMessage(error, defaultMessage);

    expect(result).toStrictEqual(expected);
  });
  it('testing return errorCode with errorCode for errorMessage & errorMessage for defaultErrorMessage when error object with errorCode & errorMessage provided', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: 'PAY_001',
          message: 'Internal Server Error',
        },
      },
    };

    const expected = {
      errorMessage: 'errorCode.PAY_001',
      defaultErrorMessage: 'Internal Server Error',
    };
    const result = generateErrorMessage(error, defaultMessage);

    expect(result).toStrictEqual(expected);
  });
  it('testing return errorMessage for both errorMessage & defaultErrorMessage when errorCode not provided instead of defaultMessage', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: '',
          message: 'Internal Server Error',
        },
      },
    };

    const expected = {
      errorMessage: 'Internal Server Error',
      defaultErrorMessage: 'Internal Server Error',
    };
    const result = generateErrorMessage(error, defaultMessage);

    expect(result).toStrictEqual(expected);
  });
  it('testing return defaultMessage for both errorMessage & defaultErrorMessage when errorMessage & errorCode is empty string', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: '',
          message: '',
        },
      },
    };

    const expected = {
      errorMessage: defaultMessage,
      defaultErrorMessage: defaultMessage,
    };
    const result = generateErrorMessage(error, defaultMessage);

    expect(result).toStrictEqual(expected);
  });
});

describe('test alertErrorMessage', () => {
  it('testing alertErrorMessage called translation(t) and Alert.alert with default Value', () => {
    const defaultMessage = 'default';
    const error: any = null;
    const t = jest.fn((translate: string, _: string) => translate);

    alertErrorMessage(error, defaultMessage, t);

    expect(t).toBeCalledWith(defaultMessage, defaultMessage, undefined);
    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toBeCalledWith(defaultMessage);
    expect(Alert.alert).toHaveBeenCalled();
  });
  it('testing alertErrorMessage called translation(t) with errorCode dan defaultValue and Alert.alert with errorCode', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: 'PAY_001',
        },
      },
    };

    const t = jest.fn((translate: string, _: string) => translate);

    alertErrorMessage(error, defaultMessage, t);

    expect(t).toBeCalledWith(
      `errorCode.${error.data.payload.errorCode}`,
      defaultMessage,
      undefined,
    );
    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toBeCalledWith(
      `errorCode.${error.data.payload.errorCode}`,
    );
    expect(Alert.alert).toHaveBeenCalled();
  });

  it('testing alertErrorMessage with errorCode for errorMessage & errorMessage for defaultErrorMessage', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: 'PAY_001',
          message: 'Internal Server Error',
        },
      },
    };

    const t = jest.fn((translate: string, _: string) => translate);

    alertErrorMessage(error, defaultMessage, t);

    expect(t).toBeCalledWith(
      `errorCode.${error.data.payload.errorCode}`,
      error.data.payload.message,
      undefined,
    );
    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toBeCalledWith(
      `errorCode.${error.data.payload.errorCode}`,
    );
    expect(Alert.alert).toHaveBeenCalled();
  });

  it('testing alertErrorMessage called translation with errorMessage', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: '',
          message: 'Internal Server Error',
        },
      },
    };

    const t = jest.fn((translate: string, _: string) => translate);

    alertErrorMessage(error, defaultMessage, t);

    expect(t).toBeCalledWith(
      error.data.payload.message,
      error.data.payload.message,
      undefined,
    );
    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toBeCalledWith(error.data.payload.message);
    expect(Alert.alert).toHaveBeenCalled();
  });

  it('testing alertErrorMessage, translation called with defaultMessage for both params, and Alert.alert be called with defaultMessage', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: '',
          message: '',
        },
      },
    };

    const t = jest.fn((translate: string, _: string) => translate);

    alertErrorMessage(error, defaultMessage, t);

    expect(t).toBeCalledWith(defaultMessage, defaultMessage, undefined);
    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toBeCalledWith(defaultMessage);
    expect(Alert.alert).toHaveBeenCalled();
  });

  it('testing alertErrorMessage called translation with errorParams', () => {
    const defaultMessage = 'default';
    const error: any = {
      data: {
        payload: {
          errorCode: '',
          message: 'Internal Server Error',
          errorParams: {
            orderId: 'orderId',
          },
        },
      },
    };

    const t = jest.fn((translate: string, _: string) => translate);

    alertErrorMessage(error, defaultMessage, t);

    expect(t).toBeCalledWith(
      error.data.payload.message,
      error.data.payload.message,
      error.data.payload.errorParams,
    );
    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toBeCalledWith(error.data.payload.message);
    expect(Alert.alert).toHaveBeenCalled();
  });
});

describe('test alertFailureReason', () => {
  it('testing alertFailureReason called translation(t) and Alert.alert with default Value', () => {
    const order: any = null;
    const t = jest.fn((translate: string, _?: string) => translate);

    alertFailureReason(order, t);

    expect(t).toHaveBeenCalled();
    expect(Alert.alert).toHaveBeenCalled();
  });
});
