import * as React from 'react'
import {Component} from 'react'

import { StyleSheet, Text, View, Platform } from "react-native"

/**
 * @areslabs/wx-animated 是参考小程序API实现的一套可以运行在React Native，小程序上的动画
 * 详情参考：https://areslabs.github.io/alita/%E5%8A%A8%E7%94%BB.html
 */
import {AnimatedImage, createAnimation} from '@areslabs/wx-animated'


const rnLogoPng = require('./rn_logo.png')

interface IState {
    logoAni: object | null
}

interface IProps {}

export default class HelloWorld extends Component<IProps, IState> {

    state = {
        logoAni: null,
    }

    componentDidMount() {
        this.logoAni()
    }

    render() {
        return (
            <View style={styles.container}>

                <AnimatedImage
                    animation={this.state.logoAni}
                    source={rnLogoPng}
                    style={styles.logo}
                />

                <Text>
                    Hello Alita
                </Text>
            </View>

        );
    }

    logoAni(num = 1) {
        const ani = createAnimation({
            duration: 5000,
        })
        ani.rotateZ(360 * num)
        ani.step()
        this.setState({
            logoAni: ani.export(() => {
                this.logoAni(num + 1)
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100
    }
})