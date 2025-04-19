import { ImageSourcePropType } from "react-native";

export type Merchent = {
  id: string;
  name: string;
  logo: ImageSourcePropType;
  voucher: string;
  rate: number;
  reviewsCounter: number;
};
