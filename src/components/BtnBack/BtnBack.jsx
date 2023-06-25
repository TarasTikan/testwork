import { useLocation, useNavigate } from "react-router-dom";
import { BtnBackPage } from "./BtnBack.styled"

export const BtnBack = () => {
      const location = useLocation();
      const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(location?.state?.from ?? '/');
  };
    return (
      <BtnBackPage type="button" onClick={handleBackBtn}>
        Back
      </BtnBackPage>
    );
}