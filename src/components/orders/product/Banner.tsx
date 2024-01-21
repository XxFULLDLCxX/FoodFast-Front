import styled, { css } from "styled-components";

export type ProductBannerProps = { $banner?: string; $bg: string };

export const ProductBanner = styled.li<ProductBannerProps>`
  flex-shrink: 0;
  max-width: 280px;
  min-width: 200px;
  cursor: pointer;
  user-select: none;
  border-radius: 15px;
  position: relative;
  height: 245px;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.2);
  padding-top: 70px;
  border-radius: 15px;
  img {
    position: absolute;
    object-fit: cover;
    top: 10px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 100px;
    border-radius: 25%;
  }
  > div {
    border-radius: 15px;
    background-color: #ffffff;
    height: 100%;
  }

  ${({ $bg, $banner }) =>
    $banner
      ? css`
          background-image: url(${$banner});
          background-position: 0px 0px;
          background-size: contain;
          background-repeat: no-repeat;
        `
      : css`
          background-color: ${$bg};
        `}
`;
