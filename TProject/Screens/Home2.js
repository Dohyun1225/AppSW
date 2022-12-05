import React from 'react'
import { View, Text } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  function Home2(){
    return(
        <View>
            <Text>Bezier Line Chart</Text>
            
            <BarChart
  style={graphStyle}
  data={data}
  width={screenWidth}
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
        </View>
    );
    }
export default Home2;