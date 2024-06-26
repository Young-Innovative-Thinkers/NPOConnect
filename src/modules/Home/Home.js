import { Avatar, Card, Divider, Text, Modal, Portal, PaperProvider, Icon} from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import Avatar2Image from './stories/avatar2.webp';
import AvatarImage from './stories/avatar.jpg';
import ErasmusImage from './stories/erasmus.jpg';
import PolitieImage from './stories/politie.jpg';
import Story1 from './stories/story1.jpg';
import Story2 from './stories/story2.jpg';
import Story3 from './stories/story3.png';
import Story4 from './stories/story4.png';

export default function Home() {
    const LeftContent = props => <Avatar.Image {...props} source={AvatarImage} />;
    const [visible, setVisible] = React.useState(false);

    const hideModal = () => setVisible(false);
    const [visibleUpload, setVisibleUpload] = React.useState(false);

    const hideUpload = () => setVisibleUpload(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return(
        <PaperProvider>
 
            <ScrollView horizontal={true}>
                <Avatar.Image  style = {styles.stories} size={50} source={Story1} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story2} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story3} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story4} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story1} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story2} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story3} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story4} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story1} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story2} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story3} />
                <Avatar.Image  style = {styles.stories} size={50} source={Story4} />
            </ScrollView>
            <ScrollView>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Card>
                            <Card.Title title="connectXplorer" subtitle="Boom op mijn auto" left={LeftContent} />
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
                <Card style={{marginBottom: 10}}>
                    <Card.Title title="Jimmy_n" subtitle="The Erasmus bridge was closed until afternoon.." left={LeftContent} />
                    <Card.Cover style={{padding: 15}} source={ErasmusImage} />
                    <Card.Content style={{flexDirection: 'row' }}>
                        <Icon
                            source="star"
                            color={'yellow'}
                            size={40}
                        />
                        <Icon
                            source="forum-outline"
                            color={'grey'}
                            size={40}
                        />
                        <Text style={{alignSelf: 'center', left: 170}} variant="bodyMedium">    <Icon
                            source="map-marker"
                            color={'red'}
                            size={25}
                        />Rotterdam</Text>
                    </Card.Content>
                </Card>
                <Divider />
                <Card style={{marginBottom: 10}}>
                    <Card.Title title="ConnectXplorer" subtitle="Policemen arresting a man that was causing... " left={props => <Avatar.Image {...props} source={Avatar2Image} />} />
                    <Card.Cover style={{padding: 15}} source={PolitieImage} />
                    <Card.Content style={{flexDirection: 'row' }}>
                        <Icon
                            source="star"
                            color={'yellow'}
                            size={40}
                        />
                        <Icon
                            source="forum-outline"
                            color={'grey'}
                            size={40}
                        />
                        <Text style={{alignSelf: 'center', left: 170}} variant="bodyMedium">    <Icon
                            source="map-marker"
                            color={'red'}
                            size={25}
                        />The Hague</Text>
                    </Card.Content>
                </Card>
                <Divider />
                <Card style={{marginBottom: 10}}>
                    <Card.Title title="Jimmy_n" subtitle="The Erasmus bridge was closed until afternoon.." left={LeftContent} />
                    <Card.Cover style={{padding: 15}} source={ErasmusImage} />
                    <Card.Content style={{flexDirection: 'row' }}>
                        <Icon
                            source="star"
                            color={'yellow'}
                            size={40}
                        />
                        <Icon
                            source="forum-outline"
                            color={'grey'}
                            size={40}
                        />
                        <Text style={{alignSelf: 'center', left: 170}} variant="bodyMedium">    <Icon
                            source="map-marker"
                            color={'red'}
                            size={25}
                        />Rotterdam</Text>
                    </Card.Content>
                </Card>
                <Card style={{marginBottom: 10}}>
                    <Card.Title title="ConnectXplorer" subtitle="Policemen arresting a man that was causing... " left={props => <Avatar.Image {...props} source={Avatar2Image} />} />
                    <Card.Cover style={{padding: 15}} source={PolitieImage} />
                    <Card.Content style={{flexDirection: 'row' }}>
                        <Icon
                            source="star"
                            color={'yellow'}
                            size={40}
                        />
                        <Icon
                            source="forum-outline"
                            color={'grey'}
                            size={40}
                        />
                        <Text style={{alignSelf: 'center', left: 170}} variant="bodyMedium">    <Icon
                            source="map-marker"
                            color={'red'}
                            size={25}
                        />The Hague</Text>
                    </Card.Content>
                </Card>
            </ScrollView>
        </PaperProvider>  
    );
}

const styles = StyleSheet.create({
    stories: {
        margin: 10,
    },
});