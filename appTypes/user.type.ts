import {PaymentOption} from './paymentMethod.type';

export interface IUser {
  sub?: string;
  name?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  phone_number_verified?: boolean;
  default_payment_option?: PaymentOption;
  email?: string;
  last_verified_email?: string;
  email_verified?: boolean;
  payment_options?: object;
  facebook_id?: string;
  facebook_meta?: object;
  google_id?: string;
  google_meta?: object;
  apple_id?: string;
  show_privacy_policy?: string;
  apple_meta?: object;
  idp_id?: string;
  app_registered_country?: string;
}

export interface IPreAuth {
  phoneNumber?: string;
  lang?: string;
  method?: string;
}
