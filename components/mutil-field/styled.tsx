import styled from "styled-components";

const SMutilField = styled.div`
  .title {
    margin-bottom: 42px;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #1e1e1e;
  }
  .head-title {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    span {
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -0.02em;
      color: #1e1e1e;
    }
  }
  .second .content {
    padding-left: 8px;
    background: -webkit-linear-gradient(
      270deg,
      #c7f833 -3.31%,
      #5ddfc0 54.93%,
      #007ead 129.8%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .wrap-field {
    margin-top: 38px;
  }
  .head-field {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #353535;
  }
  .wrap-head {
    padding: 0px 82px;
  }
  .type-field {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #353535;
      padding: 20px 0px;
    }
  }
  .color-private {
    background: -webkit-linear-gradient(
      270deg,
      #c7f833 -3.31%,
      #5ddfc0 54.93%,
      #007ead 129.8%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sub-title {
    display: flex;
    justify-content: center;
    margin-top: 104px;
    margin-bottom: 64px;
    .content {
      margin-right: 8px;
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      text-align: center;
      letter-spacing: -0.02em;
      background: linear-gradient(
        270deg,
        #c7f833 -3.31%,
        #5ddfc0 54.93%,
        #007ead 129.8%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .content-sub {
    display: flex;
    flex-direction: column;
  }
  .content-number {
    margin-bottom: 32px;
    span {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.02em;
      background: linear-gradient(
        270deg,
        #c7f833 -3.31%,
        #5ddfc0 54.93%,
        #007ead 129.8%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .content-head {
    margin-bottom: 24px;
    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #353535;
    }
  }
  .content-sub {
    padding: 0px 90px 0px 0px;
    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #4e4e4e;
    }
    .first {
      margin-bottom: 12px;
    }
  }
  @media only screen and (max-width: 414px) {
    .wrap-head {
      padding: 0px 16px 32px 16px;
    }
    .wrap-field {
      margin-bottom: 30px;
    }
    .sub-title {
      display: flex;
      padding: 0px 16px;
    }
    .mobile-head-title {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.02em;
      color: #1e1e1e;
      .second {
        background: -webkit-linear-gradient(
          270deg,
          #c7f833 -3.31%,
          #5ddfc0 54.93%,
          #007ead 129.8%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .mobile-field {
      padding: 0px 16px;
      margin-bottom: 32px;
    }
    .sub-title {
      display: contents;
    }
  }
`;

export { SMutilField };
