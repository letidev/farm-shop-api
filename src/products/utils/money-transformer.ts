import { ValueTransformer } from 'typeorm';
import Big from 'big.js';
import { MoneyConstants } from '../constants/MoneyConstants';

export class MoenyTransformer implements ValueTransformer {
  public to = (val: string): string => {
    return Big(val).toFixed(MoneyConstants.DECIMAL_PLACES);
  };

  public from = (val: string): string => {
    Big.DP = MoneyConstants.DECIMAL_PLACES;
    Big.RM = MoneyConstants.ROUNDING_METHOD;

    return Big(val).toFixed(MoneyConstants.DECIMAL_PLACES);
  };
}
