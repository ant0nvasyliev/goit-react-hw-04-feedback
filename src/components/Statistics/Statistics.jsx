import {StatisticsContainer, StatisticsItem} from './Statistics.styled'

export const Statistics = ({ feedbackScore, totalFeedback, positivePercentage }) => {
return  (
   <StatisticsContainer>
      <StatisticsItem>Good - {feedbackScore.good}</StatisticsItem>
      <StatisticsItem>Neutral - {feedbackScore.neutral}</StatisticsItem>
      <StatisticsItem>Bad - {feedbackScore.bad}</StatisticsItem>
      <StatisticsItem>Total - {totalFeedback}</StatisticsItem>
      <StatisticsItem>Average percentage - {positivePercentage} %</StatisticsItem>
   </StatisticsContainer>    
);        
};