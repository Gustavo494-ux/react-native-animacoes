import { FlatList, View, Image} from "react-native";
import styles from './styles';
import React, { useEffect, useRef, useState } from "react";

export function Carrossel({data}){
  const carrosselRef = useRef();
  const [indice, setIndice] = useState(0)

  function alteraPosicaoObjeto(){
    if(indice < data.length - 1){
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  }

  useEffect(() =>{
    carrosselRef.current.scrollToIndex({index: indice })

    const intervalo = setInterval(() => {
      alteraPosicaoObjeto()
    },2000)

    return () => clearInterval(intervalo)
  },[indice])

    return (
        <View style={styles.container}>
             <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <Image
                  source={item.imagem}
                  style={[
                      { height: '100%', width: 150 }, 
                      index == data.length-1 ? {marginRight: 200} : null]}
                  resizeMode="contain"
                />
              )}
              ref={carrosselRef}
            />
        </View>
    )
}