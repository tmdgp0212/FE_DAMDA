import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      yolda_black_1: string;
      main_blue: string;
      sub_blue_1: string;
      sub_blue_2: string;
      red_1: string;
      green_1: string;
      yellow_1: string;
      yolda_gray_1: string;
      yolda_gray_2: string;
      yolda_gray_3: string;
      yolda_gray_4: string;
      yolda_gray_5: string;
    };
    padding: {
      mobile: string;
    };
    size: {
      header_height: string;
    };
  }
}
