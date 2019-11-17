import React from 'react';
import { View, Text, Image, SafeAreaView, SectionList, FlatList } from 'react-native';

import { SegmentedControlIOS } from "react-native";

import { HomeStyles, ScreenStyles } from '../config/styles';

class Articles extends React.Component {
    state = {articlesId: [], top10Articles: []};

    componentDidMount() {
        //this.getTopStoriesFromServer();
        //this.getTop10Stories();
        this._mounted = true;
    }

    async getTop10Stories() {
        let top10ArticlesId = this.state.articlesId.slice(0,10);
        this.setState({top10Articles: Promise.all(top10ArticlesId.map(id=>getStory(id)))})
    }

    async getStory(id) {
        try {
            let response = await fetch("https://hacker-news.firebaseio.com/v0/item/"+id+".json");
            let responseJson = await response.json();
            console.warn(responseJson);
            return await responseJson; 
        } catch(error) {
            console.error(error);
        }
    }

    async getTopStoriesFromServer() {
        try {
            let response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
            let topArticles = await response.json();
            this.setState({articlesId: topArticles});
        } catch(error) {
            console.error(error);
        }
    }
    render() {
        if (this.state.top10Articles.length>0) {
            console.error(this.state.top10Articles);
        }
        if(this._mounted && this.state.articlesId.length>0) {
            return (<FlatList
                data={this.state.articlesId}
                renderItem={({item}) => <Text>{item}</Text>}
                keyExtractor={({item}, index) => item}
             />);
        }
        return (<Text style={{ justifyContent: 'center' }}>No Articles Found!</Text>);
    }
}

export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={ScreenStyles.Screen}>
                <View style={HomeStyles.MainHeader}>
                    <View style={HomeStyles.HeaderText}>
                        <Image source={require("../config/img/logo.png")} style={{width: 40, height: 40, borderRadius: 5}} />
                        <Text style={{alignSelf: 'center', margin: 10, fontSize: 18, fontWeight: 'bold'}}>Refined Hckrnews</Text>
                    </View>
                </View>
                <SegmentedControlIOS style={HomeStyles.MainSegment}
                    values={['Home', 'Top 10', 'Top 20', 'Top 50%']}
                    selectedIndex={0}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }}
                />
                <View style={HomeStyles.Articles}>
                    <Articles />
                </View>
            </SafeAreaView>
        );
    }
}
