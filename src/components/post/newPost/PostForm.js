import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputLabel from "@/components/common/InputLabel";
import Input from "@/components/common/Input";
import InputFormFix from "./InputFormFix";
import { TitleNotice, ContentNotice } from "./FormNotice";
import Button from "@/components/common/Button";
import Error from "./Error";
import uploadPost from "@/api/post/uploadPost";
import { useEffect, useState } from "react";
import getUserInfo from "@/api/post/getUserInfo";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const title = watch("title", "");
  const content = watch("content", "");

  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await getUserInfo();
        console.log(result.data);
        setUserInfo(result.data);
      } catch (error) {
        console.log("error", error);

        navigate("/error");
      }
    };
    fetch();
  }, [navigate]);

  return (
    <Wrapper
      onSubmit={handleSubmit((data) => {
        const fetch = async () => {
          const result = await uploadPost(data);
          navigate(`/post/newpostcomplete?postId=${result.data.postId}`);
        };
        fetch();
      })}
    >
      <FormWrapper>
        <TextCount>{title.length}/30</TextCount>
        <InputWrapper>
          <InputLabel
            text={"제목"}
            isEssential={true}
            condition={"(30자 이하)"}
          />

          <Input
            type="text"
            placeholder="제목을 입력해 주세요."
            style={errors.title && { border: "1px solid var(--main-color)" }}
            $customStyles={CustomInputStyle}
            {...register("title", {
              required: "제목을 입력해주세요.",
              minLength: {
                value: 1,
                message: "최소 1자 이상",
              },
              maxLength: {
                value: 30,
                message : "최대 30자 이하"
              },
              validate: value => value.trim() !== '' || 'No spaces allowed'
            })}

          />
        </InputWrapper>
        {title.length > 30 ? <Error text={"30자 이하로 작성해주세요"} /> : null}
        {errors.title && <Error text={errors.title.message} />}
        <TitleNotice />

        <TextCount>{content.length}/500</TextCount>
        <InputWrapper>
          <InputLabel
            text={"내용"}
            isEssential={true}
            condition={"(500자 이하)"}
          />
          <TextArea
            type="text"
            placeholder="환자와 작성자의 정보 / 현재 상황 / 질병 상세 설명 / 기부 방법 등을 적어주세요."
            style={errors.content && { border: "1px solid var(--main-color)" }}
            {...register("content", {
              required: "내용을 입력해주세요.",
              minLength: {
                value: 1,
                message: "최소 1자 이상",
              },
              maxLength: {
                value: 500,
              },
              validate: value => value.trim() !== '' || '공백은 입력 불가입니다.'
            })}
          />
        </InputWrapper>
        {content.length > 500 ? (
          <Error text={"500자 이하로 작성해주세요"} />
        ) : null}
        {errors.content && <Error text={errors.content.message} />}
        <ContentNotice />

        <InputFormFix text={"이름"} content={userInfo.name} />
        <InputFormFix text={"전화번호"} content={userInfo.phoneNumber} />

        <InputWrapper style={{ marginTop: "32px" }}>
          <InputLabel text={"필요 개수"} isEssential={true} />
          <Input
            type="number"
            placeholder="필요한 헌혈증 개수를 입력해주세요."
            style={
              errors.wantedCard && { border: "1px solid var(--main-color)" }
            }
            $customStyles={CustomInputStyle}
            {...register("wantedCard", {
              required: "희망 개수를 입력해주세요.",
              min: {
                value: 1,
                message: "최소 1개 이상의 필요 헌혈 증서 갯수를 등록해주세요.",
              },
              validate: value => {
                if (value.trim() === '') {
                  return '공백은 허용되지 않습니다.';
                }
                if (isNaN(value)) {
                  return '반드시 숫자여야 합니다.1';
                }
                if (Number(value) < 0) {
                  return '마이너스 값은 허용되지 않습니다.';
                }
                return true;
              }
            })}
          />
        </InputWrapper>
        {errors.wantedCard && <Error text={errors.wantedCard.message} />}

        <InputWrapper style={{ marginTop: "32px" }}>
          <InputLabel text={"헌혈증 수령주소"} isEssential={true} />
          <Input
            type="text"
            placeholder="위치를 입력해주세요."
            style={errors.address && { border: "1px solid var(--main-color)" }}
            $customStyles={CustomInputStyle}
            {...register("address", {
              required: "위치를 입력해주세요.",
              minLength: {
                value: 1,
                message: "최소 1자 이상",
              },
              maxLength: {
                value: 50,
                message: "최대 50자 이하",
              },
            })}
          />
        </InputWrapper>
        {errors.address && <Error text={errors.address.message} />}
      </FormWrapper>
      <ButtonWrapper>
        <Button
          type="submit"
          $customStyles={CustomButtonStyle}
        >
          작성하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const ButtonWrapper = styled.div`
  box-sizing : border-box;
  display : flex;
  justify-content : center;

`

const Wrapper = styled.form`
`;

const FormWrapper = styled.div`
  margin: 0 168px;
`;

const TextCount = styled.div`
  text-align: end;
  font-size: 14px;
  margin-bottom: 15px;
  margin-top: 30px;
  color: var(--gray-color);
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 75%;
  height: 561px;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
  font-family: pretendard;
  resize: none;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const CustomInputStyle = `
  width : 81%;
  height : 52px;
  padding : 0 24px;
`

const CustomButtonStyle = `
  width : 1064px;
  background : #f4f4f4;
  color : var(--gray-color);
  margin-top : 108px;
  transition : 0.2s;
  

  &:hover {
    background : var(--main-color);
    color :  #fff;
  }
`

export default PostForm;
