import React, {useState} from 'react';
import {View, Text, Image ,StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';

import Sinopse from '../Sinopse'

export default function Filmes({data}){
    
    const [modalVisible, setModalVisible] = useState(false);
    
    return(
        <View style={styles.container}>  
            <View style={styles.card}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.titulo}>{data.nome}</Text>

                    <Image
                        source={{ uri: data.foto }}
                        style={styles.banner}
                    />

                   <View style={styles.areaHint}>
                     <View style={styles.hint}>
                        <Text style={styles.hintText}>VER MAIS</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>

            <Modal 
                visible={modalVisible}
                animationType='slide' 
                transparent={true}
                onBackdropPress={() => setModalVisible(false)}
                >
                <Sinopse data={data} voltar={() => setModalVisible(false)}/>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
   },
   card:{
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    elevation: 5
   },
   titulo:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10
   },
   banner:{
    height: 200,
    zIndex: 2
   },
   areaHint:{
    alignItems: 'flex-end',
    marginTop: -39,
    zIndex: 9
   },
   hint:{
    backgroundColor: 'red',
    padding: 10,
    borderTopLeftRadius: 20
   },
   hintText:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
   }

})