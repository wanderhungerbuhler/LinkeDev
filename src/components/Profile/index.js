import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

class Profile extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQEvGZ3JBYwNgw/profile-displayphoto-shrink_100_100/0?e=1588204800&v=beta&t=THwgX0pcd7dW-IlooO2gTk0dq__81fhzJbude6hvrfM' }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
