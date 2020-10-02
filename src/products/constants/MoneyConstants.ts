import { RoundingMode } from 'big.js';

export class MoneyConstants {
  public static readonly ROUNDING_METHOD: RoundingMode =
    RoundingMode.RoundHalfUp;
  public static readonly DECIMAL_PLACES: number = 2;
}
