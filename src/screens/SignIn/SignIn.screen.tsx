import { Text, Image, View } from 'react-native'

//* IMAGES
import illustration from 'assets/illustration.png'
import discord from 'assets/discord.png'

//* CUSTOM IMPORTS
import { Button } from '@components/index'
import { styles } from './signIn.styles'

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image source={illustration} resizeMode="stretch" style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'} suas jogatinas {'\n'} facilmente
        </Text>

        <Text style={styles.description}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <Button
          style={styles.button}
          content="Entrar com o Discord"
          icon={
            <View style={styles.iconContainer}>
              <Image source={discord} style={styles.icon} />
            </View>
          }
        />
      </View>
    </View>
  )
}
