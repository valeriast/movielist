import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Sinopse(props){
    return(
        <View style={styles.container}>
            <View style={styles.modal}>
                <TouchableOpacity style={styles.btnFechar} onPress={props.voltar}>
                    <MaterialIcon 
                        name='close-circle'
                        size={25}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                
                <Icon
                    name='horizontal-rule'
                    style={styles.rule}
                    size={30}
                />
                
                <Text style={styles.titulo}>{props.data.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.data.sinopse}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingRight: 20,
    },
    modal:{
        height: '80%',
        backgroundColor: '#424242',
        zIndex: 9
    },
    btnFechar:{
        alignItems: 'flex-end'
    },
    titulo:{
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },
    sinopse:{
        color: '#FFF',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 30
    },
    descricao:{
        color: '#FFF',
        margin: 20
    },
    icon:{
        paddingTop: 10,
        paddingRight: 20,
        color: 'white',
    },
    rule:{
        textAlign: 'center',
        alignItems: 'center',
        color: 'white'
    }
})