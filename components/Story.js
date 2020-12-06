import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;

const Card = styled.View`
    width: 106px;
    height: 170px;
    position: relative;
    margin-right: 8px;
`

const CardStory = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 12px;
`

const Story = () => {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 11 }}
      >
        <Card>
            <CardStory source={require('../assets/story1.jpg')}/>
        </Card>

      </ScrollView>
    </Container>
  );
};

export default Story;
