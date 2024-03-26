import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Avatar, Button, Card, Divider, Text, Modal, Portal, PaperProvider, IconButton, MD3Colors, } from 'react-native-paper';

export default function Home() {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visibleUpload, setVisibleUpload] = React.useState(false);

  const showUpload = () => setVisibleUpload(true);
  const hideUpload = () => setVisibleUpload(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

    return(
        <PaperProvider>
 
              
        <ScrollView>
        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Card>
        <Card.Title title="Boom omgevallen" subtitle="Recht op mijn auto" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Kom uit mijn huis ligt er ineens een boom op mijn auto. Het heeft gisteren hard gestormd
          en daardoor is er een boom op mijn auto gevallen. Ik zal als ik jullie was even checken bij jullie auto en voorzichtig rijden</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/750' }} />
        </Card>
        </Modal>
      </Portal>
      <Portal>
        <Modal visible={visibleUpload} onDismiss={hideUpload} contentContainerStyle={containerStyle}>
        <Text>Upload post here</Text>
        </Modal>
      </Portal>
        <Card>
        <Card.Title title="Boom omgevallen" subtitle="Recht op mijn auto" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Kom uit mijn huis ligt er ineens een boom op mijn auto</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/750' }} />
        <Card.Actions>
    
      <Button textColor='white' buttonColor='darkorange' style={{marginTop: 30}} onPress={showModal}>
        Read
      </Button>
        </Card.Actions>
      </Card>
      <Divider />
      <Card>
        <Card.Title title="Bom in grasveld gevonden" subtitle="Bij de Prinsstraat" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Ik hoor net van mijn buurman dat er een bom is gevonden bij een grasveld in mijn straat</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/799' }} />
        <Card.Actions>
      <Button textColor='white' buttonColor='darkorange' style={{marginTop: 30}} onPress={showModal}>
        Read
      </Button>
        </Card.Actions>
      </Card>
      <Divider />
      <Card>
        <Card.Title title="Fiets gestolen" subtitle="Op klaar lichte dag" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Iemand heeft op klaarlichte dag mijn fiets gestolen die voor mijn deur stond</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/730' }} />
        <Card.Actions>
      <Button textColor='white' buttonColor='darkorange' style={{marginTop: 30}} onPress={showModal}>
        Read
      </Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title title="Bom in grasveld gevonden" subtitle="Bij de Prinsstraat" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Ik hoor net van mijn buurman dat er een bom is gevonden bij een grasveld in mijn straat</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/799' }} />
        <Card.Actions>
      <Button textColor='white' buttonColor='darkorange' style={{marginTop: 30}} onPress={showModal}>
        Read
      </Button>
        </Card.Actions>
      </Card>
      </ScrollView>
      <Portal>
      <IconButton
    icon="upload"
    iconColor={MD3Colors.error50}
    size={30}
    style={{alignSelf: 'flex-end' }}
    onPress={() => showUpload()}
    mode='contained-tonal'
  />
  </Portal>
  <ScrollView horizontal={true}>
      <Avatar.Icon  style = {styles.stories}  color= 'orange' size={50} icon="account"/>
      <Avatar.Icon  style = {styles.stories} color= 'blue' size={50} icon="account"/>
      <Avatar.Icon  style = {styles.stories} color= 'red' size={50} icon="account"/>
      <Avatar.Icon  style = {styles.stories} color= 'green' size={50} icon="account"/>
      <Avatar.Icon  style = {styles.stories} color= 'purple' size={50} icon="account"/>
      <Avatar.Icon  style = {styles.stories} color= 'green' size={50} icon="account"/>
      <Avatar.Icon  style = {styles.stories} color= 'orange' size={50} icon="account"/>
</ScrollView>
      </PaperProvider>
      
    );
}

const styles = StyleSheet.create({
  stories: {
    margin: 10
  },
})