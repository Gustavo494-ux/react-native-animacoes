import { FlatList, View, Image} from "react-native";
import styles from './styles';

export function Carrossel({data}){
    return (
        <View style={styles.container}>
             <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Image
                  source={item.imagem}
                  style={{ height: '100%', width: 150 }}
                  resizeMode="contain"
                />
              )}
            />
        </View>
    )
}