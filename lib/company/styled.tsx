import styled, { css } from "styled-components";

const SCompanyIndex = styled("div")<{ isScroll: boolean }>`
  /* background: linear-gradient(270deg, #007ead 0%, #c7f833 100%, #5ddfc0 100%); */
  box-shadow: -5px 6px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -5px 6px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px 6px 10px -7px rgba(0, 0, 0, 0.75);
  padding-top: 36px;
  margin-bottom: 60px;
  ${(props) =>
    props.isScroll
      ? css`
          overflow-y: unset;
          height: unset;
        `
      : css`
          overflow-y: hidden;
          /* height: 30vh; */
        `}
`;

const SForm = styled.div`
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
  .mb-2 {
    margin-bottom: 12px;
  }
  .back {
    margin-left: 12px;
  }
  .mr-2 {
    margin-right: 12px;
  }
`;

const SCreateProject = styled.div`
  .ant-upload {
    width: 100%;
  }
  .title-create-project {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
  }
  .sub-title {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: bold;
  }
  .ant-picker {
    width: 100%;
    height: 45px;
    border-radius: 10px;
  }
  .ant-input {
    height: 45px;
  }
  .ant-select {
    height: 45px;
    border-radius: 10px;
    .ant-select-selector {
      height: 45px;
    }
  }
  .ant-select-selection-search input {
    height: 45px !important;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
  .ant-input-number {
    width: 100%;
    height: 45px;
    border-radius: 10px;
  }
  .ant-input-number-input-wrap {
    height: 45px;
    display: flex;
    align-items: center;
  }
  .group {
    font-size: 20px;
    margin-bottom: 16px;
  }
  .btn-create-user {
    height: 40px;
    border-radius: 40px;
  }
  .wrap-edit-remove {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 56px;
    padding: 2px 10px;
    .btn-icon {
      border: none;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const STeamMember = styled.div`
  .custom-input-modal {
    height: 36px;
  }
  .ant-input {
    border-radius: 10px;
  }
`;

export { SCompanyIndex, SForm, SCreateProject, STeamMember };
