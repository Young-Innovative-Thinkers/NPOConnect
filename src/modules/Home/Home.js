import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Divider, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function Home() {
    return(
        <ScrollView>
        <Card>
        <Card.Title title="Boom omgevallen" subtitle="Recht op mijn auto" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Kom uit mijn huis ligt er ineens een boom op mijn auto</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/750' }} />
        <Card.Actions>
          <Button>Read</Button>
        </Card.Actions>
      </Card>
      <Divider />
      <Card>
        <Card.Title title="Boom omgevallen" subtitle="Recht op mijn auto" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Kom uit mijn huis ligt er ineens een boom op mijn auto</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/730' }} />
        <Card.Actions>
          <Button>Read</Button>
        </Card.Actions>
      </Card>
      <Divider />
      <Card>
        <Card.Title title="Boom omgevallen" subtitle="Recht op mijn auto" left={LeftContent} />
        <Card.Content>
          <Text variant="bodyMedium">Kom uit mijn huis ligt er ineens een boom op mijn auto</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/751' }} />
        <Card.Actions>
          <Button>Read</Button>
        </Card.Actions>
      </Card>
      </ScrollView>
      
    );
}
