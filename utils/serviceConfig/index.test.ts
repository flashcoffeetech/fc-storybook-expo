import {IServiceConfig} from '@appTypes/serviceConfig.type';
import {serviceCofigDataParse} from '.';

it('formatNumber works well', () => {
  const serviceConfigData: any = {
    default_pickup_time_add_var: '10000',
    enabled_payment_cash: true,
    enabled_payment_cc: true,
    is_enabled_delivery: 'true',
    clean_hub_donation_amount: '2',
    show_item_note: 'true',
  };

  const serviceConfigResult: IServiceConfig = {
    clean_hub_donation_amount: 2,
    default_pickup_time_add_var: 10000,
    enabled_payment_cash: true,
    enabled_payment_cc: true,
    is_enabled_delivery: 'true',
    show_item_note: true,
  };

  expect(serviceCofigDataParse(serviceConfigData)).toStrictEqual(
    serviceConfigResult,
  );
});
