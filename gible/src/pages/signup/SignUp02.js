import React from "react";
import styled from "styled-components";
import SignUpTitle from "@/components/signup/SignUpTitle";
import SignUpStepBox from "@/components/signup/SignUpStepBox";

const SignUp02 = () => {
  return (
    <Box>
      <Center>
        <SignUpTitle />
        <SignUpStepBox number={2} />
        <SubTitleBox>
          <SubTitleTitle>회원 정보 입력</SubTitleTitle>
          <GuideMessage>
            <span style={{ color: "red" }}>*</span>
            <span>은 필수 입력 항목입니다.</span>
          </GuideMessage>
        </SubTitleBox>
        <StyledHr1 />
        <UserInformationBox>
          <UserInformationFormBox>
            <UserInformationForm>
              <UserInformationName>
                아이디<span style={{ color: "red" }}>*</span>
              </UserInformationName>
              <UserInformationInput
                type="text"
                placeholder="아이디를 입력해주세요"
              />
              <UserInformationBtn type="button">ID 중복확인</UserInformationBtn>
            </UserInformationForm>
            <UserInformationPasswordFormBox>
              <UserInformationPasswordForm>
                <UserInformationName>
                  비밀번호<span style={{ color: "red" }}>*</span>
                </UserInformationName>
                <UserInformationInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              </UserInformationPasswordForm>
              <PasswordGuide>
                영문, 숫자, 특수문자 중 2가지 이상을 활용하여 10~ 15자리로
                입력해주세요.
              </PasswordGuide>
            </UserInformationPasswordFormBox>

            <UserInformationForm>
              <UserInformationName>
                비밀번호 확인<span style={{ color: "red" }}>*</span>
              </UserInformationName>
              <UserInformationInput
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
            </UserInformationForm>

            <UserInformationForm>
              <UserInformationName>
                성명<span style={{ color: "red" }}>*</span>
              </UserInformationName>
              <UserInformationInput
                type="text"
                placeholder="성명을 입력해주세요."
              />
            </UserInformationForm>
            <UserInformationForm>
              <UserInformationName>
                휴대폰 번호<span style={{ color: "red" }}>*</span>
              </UserInformationName>
              <UserInformationInput
                type="text"
                placeholder="휴대폰번호를 입력해주세요."
              />
            </UserInformationForm>
            <UserInformationForm>
              <UserInformationName>
                이메일<span style={{ color: "red" }}>*</span>
              </UserInformationName>
              <UserInformationInput
                type="text"
                placeholder="이메일을 입력해주세요."
              />
              <UserInformationBtn type="button">인증하기</UserInformationBtn>
            </UserInformationForm>
            <UserInformationForm>
              <UserInformationName></UserInformationName>
              <UserInformationInput
                type="text"
                placeholder="인증번호 6자리를 입력해주세요."
              />
            </UserInformationForm>
          </UserInformationFormBox>
          <StyleHr2 />
          <MarketingBox>
            <MarketingTitle>
              마케팅 정보 수신 동의
              <span style={{ color: "#767676" }}>&nbsp;(선택)</span>
            </MarketingTitle>
            <MarketingSubTitle>
              서비스와 커뮤니티 관련 빠른 소식안내, 이벤트 안내 등 다양한 정보를
              제공합니다.
            </MarketingSubTitle>
            <MarketingCheckBoxBox>
              <MarkietingCheckBox type="checkbox" />{" "}
              <CheckBoxText>SNS 수신 동의</CheckBoxText>
              <MarkietingCheckBox type="checkbox" />{" "}
              <CheckBoxText>E-Mail 수신 동의</CheckBoxText>
            </MarketingCheckBoxBox>
          </MarketingBox>
          <SignUpBtn type="button">회원 가입</SignUpBtn>
        </UserInformationBox>
      </Center>
    </Box>
  );
};

export default SignUp02;

const Box = styled.div`
  padding: 5% 15%;
  display: flex;
  justify-content: center;
`;

const Center = styled.div``;

const SubTitleBox = styled.div`
  padding-top: 50px;
`;

const SubTitleTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--24, 34px); /* 141.667% */
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

const GuideMessage = styled.div`
  display: flex;
  justify-content: right;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px);
  letter-spacing: -0.45px;
`;

const StyledHr1 = styled.hr`
  border: none;
  height: 1px;
  background: var(--main-color, #f42e3d);
`;

const UserInformationBox = styled.div`
  padding: 0px 20%;
`;

const UserInformationFormBox = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const UserInformationForm = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  padding-bottom: 24px;
  align-items: center;
  gap: 16px;
`;

const UserInformationName = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const UserInformationInput = styled.input`
  width: 50%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 0px 30px;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const UserInformationBtn = styled.button`
  width: 20%;
  height: 100%;
  display: inline-flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--main-color, #f42e3d);
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  border: none;
`;

const UserInformationPasswordFormBox = styled.div`
  padding-bottom: 24px;
  width: 100%;
`;

const UserInformationPasswordForm = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  align-items: center;
  gap: 16px;
  padding-bottom: 7px;
`;

const PasswordGuide = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-left: 22%;
`;

const StyleHr2 = styled.hr`
  border: none;
  height: 1px;
  background: #dbdbdb;
`;

const MarketingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 100px;
`;

const MarketingTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  margin-top: 20px;
`;

const MarketingSubTitle = styled.div`
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

const MarketingCheckBoxBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding-top: 20px;
`;

const MarkietingCheckBox = styled.input`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: var(--24, 34px);
  letter-spacing: -0.6px;
  accent-color: red;
  border-radius: 5px;
  margin: 10px 10px 10px 0px;
`;

const CheckBoxText = styled.div`
  margin-right: 54px;
`;

const SignUpBtn = styled.button`
  border-radius: 6px;
  background: #f4f4f4;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  padding: 10px;
  border: none;
  width: 100%;
  &:hover {
    background: var(--main-color, #f42e3d);
    color: white;
  }
`;
