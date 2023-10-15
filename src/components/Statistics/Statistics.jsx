import {StatisticsContainer, StatisticsItem} from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, totalFeedback, positivePercentage }) => {
return  (
   <StatisticsContainer>
      <StatisticsItem>Good - {good}</StatisticsItem>
      <StatisticsItem>Neutral - {neutral}</StatisticsItem>
      <StatisticsItem>Bad - {bad}</StatisticsItem>
      <StatisticsItem>Total - {totalFeedback}</StatisticsItem>
      <StatisticsItem>Average percentage - {positivePercentage} %</StatisticsItem>
   </StatisticsContainer>    
);        
};