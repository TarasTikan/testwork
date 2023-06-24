import { HomeSection, MainTitle, WrapMainInfo } from "./MainHome.styled"

export const MainHome = () => {
    return (
      <HomeSection>
        <WrapMainInfo>
          <MainTitle>Heloo</MainTitle>
          <img
            src="https://software-marketing.site-builder.review/wp-content/uploads/2021/07/app-marketing-illustration-01-1.png"
            alt="mainPicture"
            width={446}
            height={446}
          />
        </WrapMainInfo>
      </HomeSection>
    );
}