import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function InformacoesUsuarioShimmerEffect() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto,{
        borderRadius: 80
      }]} />
      <View style={styles.informacoes}>
        <Image source={shimmerGif} style={{
          width: 200,
          height: 35,
        }} />
        <Image source={shimmerGif} style={{
          marginTop: 7,
          width: 200,
          height: 16
        }} />
      </View>
    </View> 
  );
}