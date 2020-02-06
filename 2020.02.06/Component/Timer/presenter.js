import React , { Component } from 'react';
import {View , Text, StyleSheet, StatusBar} from 'react-native';
import Button from '../Button';

function formatTimes(time) { //시간을 나타내기 위한 함수 이쁘게 보여주기 위해
    //시간 포맷 변경
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${ minutes < 10 ? `0${minutes}` : minutes } : ${seconds < 10 
        ? `0${seconds}`: seconds }`;
}

class Timer extends Component {
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying){
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            },1000);
            this.setState({
                timerInterval
            });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.timer}>{formatTimes(this.props.duration - this.props.elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    { !this.props.isPlaying && (
                    <Button iconName="play-circle" onPress={this.props.startTimer} />
                    )}
                    { this.props.isPlaying && (
                    <Button iconName="stop-circle" onPress={this.props.restartTimer} />
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#CE0824',
    },

    upper : {
        flex : 2,
        justifyContent : "center",
        alignItems : "center",
    },

    lower : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },

    timer : {
        fontSize : 120,
        fontWeight : "100",
    }
}); 

export default Timer;