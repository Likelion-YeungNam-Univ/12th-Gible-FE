import logoutHandler from "@/api/login/logoutHandler";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Profile = ({ user }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = async () => {
    try {
      const result = await logoutHandler(dispatch);
      console.log(result);
      navigate('/');
    }
    catch (error) {
      console.error(error);
      navigate('/error')
    }


  }
  return (
    <Wrapper>
      <Box>
        <Content>
          <Image
            src={require("../../assets/image/profile.png")}
            alt="프로필 사진"
          />
          <Nickname>
            <span style={{ fontWeight: "600", color: "#111" }}>
              {user.nickname}
            </span>
            님
          </Nickname>
          <Name>{user.name}</Name>
          <Mail>{user.email}</Mail>
          <Number>{user.phoneNumber}</Number>
        </Content>
        <LoginBox>
          <Kakao>
            <KakaoImg
              src={require("../../assets/image/kakaologo.png")}
              alt="프로필 사진"
            />
            <Kakaologin>카카오톡 로그인중</Kakaologin>
          </Kakao>
          <Button onClick={clickHandler}>로그아웃</Button>
        </LoginBox>
      </Box>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 100%;
  height: 1400px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  height: 1360px;
  border-radius: 0px 0px 12px 12px;
  background: #fef3f4;
`;

const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 200px;
  height: 600px;
  padding: 64px 54px 44px 54px;
`;

const Image = styled.img`
  width: 204px;
  height: 204px;
  border-radius: 204px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  margin-bottom: 44px;
`;

const Nickname = styled.div`
  color: #767676;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: var(--24, 34px);
  letter-spacing: -0.65px;
  margin-bottom: 27px;
`;

const Name = styled.div`
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;

const Mail = styled.div`
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;

const Number = styled.div`
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: 150px;

  border-top: solid 2px #cacaca;
`;

const Kakao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: 30px;
  margin-bottom: 5px;
`;

const KakaoImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 5px;
`;

const Kakaologin = styled.div`
  color: #767676;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
`;

const Button = styled.button`
  background: #fef3f4;
  color: #767676;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.55px;
  padding: 14px 24px;
  border-radius: 6px;
  border: 1px solid #cacaca;
  width: 183px;
  margin-top: 15px;
  height: 46.155px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: #f42e3d;
    border-color: #f42e3d;
  }
`;
