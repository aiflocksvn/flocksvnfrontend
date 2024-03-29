import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useWindowResize from "../../hook/useResize";
import NavigationIndex from "../navigation";
import SwitchTranslate from "../translate";
import { ISubHead } from "./interface";
import { SDetailProjectPage } from "./styled";

const HeaderSub: React.FC<ISubHead> = (props) => {
  const {
    children,
    isShowHead = false,
    routerDetail,
    contentFive,
    contentFour,
    contentOne,
    contentThree,
    contentTwo,
    hrefOne,
  } = props;
  const size = useWindowResize();
  const router = useRouter();
  return (
    <SDetailProjectPage>
      <Row className="head-top">
        <Col xs={14} xl={10}>
          <div className="head-left">
            <Image
              alt="logo"
              src="/image/home/logo-new.png"
              width={121}
              height={48}
              className="logo-image pointed"
              onClick={() => router.push("/")}
            />
            {size.width < 414 && <SwitchTranslate />}
          </div>
        </Col>
        {size.width > 414 && (
          <>
            <Col xs={12} xl={12}>
              <Row className="wrap-left-head">
                <Col xl={4} className="content pointed">
                  <span onClick={() => router.push("/")}>Trang chủ</span>
                </Col>
                <Col xl={4} className="content pointed">
                  <span onClick={() => router.push("/project")}>Dự án</span>
                </Col>
                <Col xl={4} className="content pointed">
                  <span onClick={() => router.push("/blog")}>Blogs</span>
                </Col>
                <Col xl={4} className="content pointed">
                  <span onClick={() => router.push("/event")}>Sự kiện</span>
                </Col>
                <Col xl={4} className="content pointed">
                  <span onClick={() => router.push("/faq")}>FAQ</span>
                </Col>
                <Col xl={4} className="btn">
                  <button>Get Started</button>
                </Col>
              </Row>
            </Col>
            <Col xl={2}>
              <SwitchTranslate />
            </Col>
          </>
        )}
      </Row>
      {size.width <= 414 && (
        <div style={{ position: "relative", marginTop: "-38px" }}>
          <NavigationIndex
            content1="Trang chủ"
            content2="Dự án"
            content3="Blog"
            content4="Sự kiện"
            content5="FAQ"
          />
        </div>
      )}
      {!isShowHead && (
        <Row justify="center" className="breadcrumb">
          <Col span={18}>
            <Breadcrumb separator=">">
              <Breadcrumb.Item
                href={hrefOne || "https://www.flocks.vn/project/"}
              >
                {contentOne || "Tất cả Dự án"}
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className={routerDetail && "active-detail"}
                href=""
              >
                {contentTwo || "Thông tin Dự án"}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                {contentThree || "Xác minh Danh tính"}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="https://www.flocks.vn/project/payment/">
                {contentFour || "Lựa chọn Đầu tư"}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {contentFive || "Xác nhận đầu tư"}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      )}

      <Row justify="center">
        <Col span={18}>{children}</Col>
      </Row>
    </SDetailProjectPage>
  );
};

export default HeaderSub;
