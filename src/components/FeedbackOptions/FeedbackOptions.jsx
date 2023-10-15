import { ButtonsContainer, Button } from "./FeedbackOptions.styled"
import { CgSmile, CgSmileNeutral, CgSmileSad } from "react-icons/cg";

export const FeedbackOptions = ({ handleAddStats, options }) => {
   return (
      <>
         <ButtonsContainer>
            {options.map((option) => (
               <Button
                  key={option}
                  onClick={() => handleAddStats(option)}
               >
                  {option === "good" ? <CgSmile /> : null}
                  {option === "neutral" ? <CgSmileNeutral /> : null}
                  {option === "bad" ? <CgSmileSad /> : null}
               </Button>
            ))}
         </ButtonsContainer>
      </>
   )
}

