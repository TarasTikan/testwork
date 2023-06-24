import {
  HomeSection,
  MainTitle,
  WrapMainInfo,
  WrapText,
} from './MainHome.styled';

export const MainHome = () => {
  return (
    <HomeSection>
      <WrapMainInfo>
        <WrapText>
          <MainTitle>Test Work Practic</MainTitle>
          <p>
            Hello, this is my test practice. In it you will be able to see the
            list of Tweets, there are also some functions. I hope you will like
            my work.
          </p>
        </WrapText>
        <img
          src="https://software-marketing.site-builder.review/wp-content/uploads/2021/07/app-marketing-illustration-01-1.png"
          alt="mainPicture"
          width={446}
          height={446}
        />
      </WrapMainInfo>
    </HomeSection>
  );
};
