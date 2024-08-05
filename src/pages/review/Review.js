import PageNotice from "@/components/common/PageNotice";
import Separator from "@/components/review/Seperator";
import ReviewCard from "@/components/review/ReviewCard";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageController from "../../components/review/PageController";
import { useNavigate, useSearchParams } from "react-router-dom";
import getAllReviewByPageNum from "@/api/review/getAllReviewByPageNum";
import { ReactComponent as WriteButton } from "@/assets/svg/post-write-button.svg";
import Loading from "@/layouts/Loading";

const Review = () => {
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [nowPage, setNowPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchReview, setSearchReview] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      setNowPage(parseInt(searchParams.get("page")) || 0);

      try {
        const result = await getAllReviewByPageNum({ nowPage });
        console.log("result", result);
        setReviewList(result.data.content);
        setTotalPages(result.data.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        navigate("/error");
      }
    };
    fetchReview();
  }, [nowPage, setNowPage]);

  useEffect(() => {
    setReviewList(searchReview);
  }, [searchReview]);

  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <PageNotice location={["Home", "커뮤니티", "투명 후기"]} />
      <Separator title={"투명후기"} setSearchReview={setSearchReview} />
      <Container>
        {reviewList.map((el) => {
          return <ReviewCard key={el.id} review={el}></ReviewCard>;
        })}
      </Container>
      <PageControllerContainer>
        <PageController
          nowPage={nowPage}
          setNowPage={setNowPage}
          totalPages={totalPages}
        />
      </PageControllerContainer>
      <WriteButtonContainer>
        <WriteBtn onClick={() => navigate("/review/new")} />
      </WriteButtonContainer>
    </Wrapper>
  );
};

const WriteBtn = styled(WriteButton)`
  cursor: pointer;
`;

const WriteButtonContainer = styled.div`
  position: fixed;
  top: 600px;
  left: 1600px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 10%;
  width: 100%;
  min-height: 1200px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: calc(4% / 2);
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 auto;
`;

const PageControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 100px 0;
`;

export default Review;
