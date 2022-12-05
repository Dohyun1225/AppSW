import React, { Component } from 'react';
import { Text, View, Dimensions, Button } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
function Home() {
    return (
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["1번", "2번", "3번", "4번", "5번", "6번"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="정답률"
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#FFFFFF",
            backgroundGradientFrom: "##800080",
            backgroundGradientTo: "##000080",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}

          
        />

        

      </View>

    );
  }

  export default Home;