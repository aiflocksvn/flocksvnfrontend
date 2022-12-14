import styled from "styled-components";

const SIntroduction = styled.div`
  margin-top: 60px;
  .wrap-accept {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #000;
    margin-bottom: 24px;
  }
  .title {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.167;
    text-align: center;
    color: rgb(59, 78, 86);
    margin-bottom: 40px;
  }
  .sub-title,
  .content {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    color: rgb(59, 78, 86);
    margin-bottom: 16px;
  }
  .content {
    font-size: 1rem;
  }
  .check-approve {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.334;
    color: rgb(59, 78, 86);
    margin-bottom: 24px;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    button {
      width: 66.67%;
    }
  }
`;

const SForm = styled.div`
  margin-top: 42px;
  padding: 8px 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  border-radius: 10px;
  .ant-input {
    height: 54px;
    border-radius: 10px;
  }
  .form-custom {
    margin-bottom: 24px;
  }
  .ant-form-item-label {
    label {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
      letter-spacing: 0.00938em;
    }
  }
  .head-title-step {
    margin: 24px 0px 12px 0px;
  }
  .ant-checkbox-wrapper {
    margin: 8px 0px;
    span {
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.00938em;
    }
    .ant-checkbox-inner {
      border: 1px solid #000;
    }
  }
  .radio-media {
    margin-bottom: 24px;
  }
  .ant-radio-wrapper {
    margin: 8px 0px;
    span {
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.00938em;
    }
    .ant-radio-inner {
      border: 1px solid #000;
    }
  }
  .title-step {
    font-size: 16px;
    margin-bottom: 0px;
    line-height: 2;
    color: rgb(59, 78, 86);
  }
  .mb-4 {
    margin-bottom: 20px;
  }
  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
  }
  .back {
    margin-left: 12px;
  }
`;

export { SIntroduction, SForm };
