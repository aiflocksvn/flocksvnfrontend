import React, { useState } from "react";
import { SCreateProject } from "../styled";
import CustomForm from "../../../components/custom-form";
import { useForm } from "react-hook-form";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  InputNumber,
  message,
} from "antd";
import useCompany from "../useCompany";
import moment from "moment";
import UploadIndex from "../../../components/upload";
import EdittorIndex from "../../../components/edit-tor";
import CreateTeamMember from "./create-team-member";
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import CardMember from "../../../components/card/Card-Member";

const CreateProject = ({ idCompany }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createCompany, category } = useCompany();
  const [logoImage, setLogoImage] = useState<string>();
  const [coverImage, setCoverImage] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registrationDocs, setRegistrationDocs] = useState<string>();
  const [idRegistrationDocs, setIdRegistrationDocs] = useState<string>();
  const [editingMember, setEditingMember] = React.useState(null);
  const [createTeamMember, setCreateTeamMember] = useState([]);
  const [updateTeamMember, setUpdateTeamMember] = useState([]);
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [detailSections, setDetailSections] = React.useState([
    {
      title: "Overview",
      titleErr: "",
      details: "",
      detailsErr: "",
      isNew: false,
    },
    {
      title: "Problem",
      titleErr: "",
      details: "",
      detailsErr: "",
      isNew: false,
    },
    {
      title: "Solution",
      titleErr: "",
      details: "",
      detailsErr: "",
      isNew: false,
    },
  ]);
  const onSubmit = async (data: any) => {
    if (!registrationDocs) {
      message.error("Tài liệu dự án là bắt buộc");
    }
    if (
      detailSections[0].details === "" ||
      detailSections[1].details === "" ||
      detailSections[2].details === ""
    ) {
      message.error("Vui lòng nhập Overview, Problem, Solution");
    }
    const formatData = {
      ...data,
      company: idCompany,
      closingDate: moment(data.closingDate).format("YYYY-MM-DD"),
      founded: moment(data.founded).format("YYYY-MM-DD"),
      presentDocument: [
        {
          file_name: registrationDocs,
          file: idRegistrationDocs,
        },
      ],
      presentTeamMember: teamMembers.length > 0 ? teamMembers : [],
      presentDetails: detailSections,
    };
    createCompany(formatData);
  };
  const handleContentChange = (content: any, index: any) => {
    const data = [...detailSections];
    data[index].details = content;
    data[index].detailsErr = "";
    setDetailSections(data);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addTeamMember = (values: any) => {
    setIsModalOpen(false);
    const data = [...teamMembers];
    if (editingMember) {
      const newData = data.map((item) =>
        item.id === editingMember.id ? values : item
      );
      setTeamMembers(newData);
      setUpdateTeamMember(newData);
      setEditingMember(null);
    } else {
      setCreateTeamMember((prevState) => [...prevState, values]);
      data.push(values);
      setTeamMembers(data);
    }
  };
  const removeTeamMember = (index: any) => {
    const data = [...teamMembers];
    data.splice(index, 1);
    setTeamMembers(data);
  };
  const editTeamMember = (record: any) => {
    setEditingMember(record);
    setIsModalOpen(true);
  };
  return (
    <>
      <SCreateProject>
        <div className="title-create-project">
          <span>Tạo Dự án</span>
        </div>
        <div className="sub-title">
          <span>Thông tin cơ bản dự án</span>
        </div>
        <CustomForm
          name="companyName"
          label="Tên nhà đầu tư"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Tên nhà đầu tư" />
          )}
        />
        <CustomForm
          name="companySubTitle"
          label="Phụ đề dự án"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Phụ đề dự án" />
          )}
        />
        <CustomForm
          name="abstract"
          label="Tóm tắt dự án"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Tóm tắt dự án" />
          )}
        />
        <Form.Item valuePropName="fileList">
          <Row>
            <Col span={4}>
              <div className="mb-2">Logo</div>
              <UploadIndex
                setRegistrationDocs={setLogoImage}
                registrationDocs={logoImage}
              />
            </Col>
            <Col span={2} />
            <Col span={16}>
              <div className="mb-2">Ảnh bìa</div>
              <UploadIndex
                setRegistrationDocs={setCoverImage}
                registrationDocs={coverImage}
                widthTrue={true}
              />
            </Col>
          </Row>
        </Form.Item>
        <Divider />
        <div className="sub-title">
          <span>Thông tin Công ty</span>
        </div>
        <CustomForm
          name="founded"
          label="Sáng lập"
          control={control}
          render={({ field }: any) => <DatePicker {...field} />}
        />
        <CustomForm
          name="employees"
          label="Nhân viên"
          control={control}
          render={({ field }: any) => (
            <InputNumber {...field} placeholder="Nhân viên" />
          )}
        />
        <CustomForm
          name="website"
          label="Website"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Website" />
          )}
        />
        <CustomForm
          name="email"
          label="Email"
          control={control}
          render={({ field }: any) => <Input {...field} placeholder="Email" />}
        />
        <CustomForm
          name="phoneNumber"
          label="Số điện thoại"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Số điện thoại" />
          )}
        />
        <CustomForm
          name="location"
          label="Vị trí"
          control={control}
          render={({ field }: any) => <Input {...field} placeholder="Vị trí" />}
        />
        <CustomForm
          name="facebook"
          label="Facebook"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Facebook" />
          )}
        />
        <CustomForm
          name="twitter"
          label="Twitter"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Twitter" />
          )}
        />
        <CustomForm
          name="linkedin"
          label="LinkedIn"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="LinkedIn" />
          )}
        />
        <CustomForm
          name="instagram"
          label="Istagram"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Istagram" />
          )}
        />
        <CustomForm
          name="youtube"
          label="Youtube"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Youtube" />
          )}
        />
        <Divider />
        <div className="sub-title">
          <span>Thông tin dự án đầu tư</span>
        </div>
        <CustomForm
          name="category"
          label="Phân loại"
          control={control}
          render={({ field }: any) => (
            <Select
              {...field}
              style={{ width: "100%" }}
              allowClear
              options={category}
            />
          )}
        />
        <CustomForm
          name="investmentTarget"
          label="Khoản đầu tư mục tiêu"
          control={control}
          render={({ field }: any) => (
            <InputNumber {...field} placeholder="Khoản đầu tư mục tiêu" />
          )}
        />
        <CustomForm
          name="investmentMin"
          label="Đầu tư Tối thiểu"
          control={control}
          render={({ field }: any) => (
            <InputNumber {...field} placeholder="Đầu tư Tối thiểu" />
          )}
        />
        <CustomForm
          name="pricePerShare"
          label="Giá Một Cổ Phần"
          control={control}
          render={({ field }: any) => (
            <InputNumber {...field} placeholder="Gía Một Cổ Phần" />
          )}
        />
        <CustomForm
          name="closingDate"
          label="Ngày Kết thúc"
          control={control}
          render={({ field }: any) => <DatePicker {...field} />}
        />
        <Divider />
        <div className="sub-title">
          <span>Tài liệu dự án</span>
        </div>
        <UploadIndex
          setRegistrationDocs={setRegistrationDocs}
          registrationDocs={registrationDocs}
          setIdRegistrationDocs={setIdRegistrationDocs}
          types="doc"
        />
        {detailSections.map((el, index) => (
          <EdittorIndex
            key={index}
            title={el.title}
            onContentChange={(content: any) =>
              handleContentChange(content, index)
            }
          />
        ))}
        <Divider />
        <Row>
          <Col span={24}>
            <div className="group">Nhóm</div>
            <Button
              type="primary"
              onClick={showModal}
              className="btn-create-user"
            >
              <UserAddOutlined />
            </Button>
          </Col>
        </Row>
        <Row>
          {teamMembers.length > 0 &&
            teamMembers.map((member, index) => {
              return (
                <Col xs={22} xl={12} key={index}>
                  <CardMember
                    name={member.name}
                    imgSrc={`${member?.imageUrl}`}
                    position={member.position}
                    linkedIn={member.linkedIn}
                    facebook={member.facebook}
                    twitter={member.twitter}
                  />
                  <div className="wrap-edit-remove">
                    <Button
                      className="btn-icon"
                      onClick={() => editTeamMember(member)}
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      className="btn-icon"
                      onClick={() => removeTeamMember(index)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                </Col>
              );
            })}
        </Row>
        <CreateTeamMember
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={addTeamMember}
          record={editingMember}
        />
        <Divider />
        <Button onClick={handleSubmit(onSubmit)} type="primary">
          Nộp
        </Button>
      </SCreateProject>
    </>
  );
};

export default CreateProject;
