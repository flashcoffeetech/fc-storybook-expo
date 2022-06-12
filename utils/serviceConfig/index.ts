import {parseInt} from 'lodash';

export const serviceCofigDataParse = (data: any) => {
  return {
    ...data,
    default_pickup_time_add_var: parseInt(data?.default_pickup_time_add_var),
    clean_hub_donation_amount: parseFloat(data?.clean_hub_donation_amount),
    show_item_note: data?.show_item_note === 'true',
  };
};
