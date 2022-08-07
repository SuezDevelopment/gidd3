// import { View, FlatList, StyleSheet } from 'react-native';
// import { Realm } from '@realm/react';

// import { Community } from '../../schema/community';
// import { User } from '../../schema/user';
// import {CommunityProps} from './CommunityProps'

// interface CommunityListProps {
//     communitys: Realm.Results<Community> | [];
//     onToggleCommunityStatus: (community: Community) => void;
//     onDeleteCommunity: (community: Community) => void;
// }

// function CommunityList({tasks, onToggleTaskStatus, onDeleteTask}: TaskListProps) {
//     return (
//       <View style={styles.listContainer}>
//         <FlatList
//           data={tasks}
//           keyExtractor={community => community.comm_id.toString()}
//           renderItem={({item}) => (
//             <CommunityProps
//                   description={item.description}
//                   isApproved={item.isApproved}
//                   onToggleStatus={() => onToggleTaskStatus(item)}
//                   onDelete={() => onDeleteTask(item)} name={''} membersCount={0}              // Don't spread the Realm item as such: {...item}
//             />
//           )}
//         />
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//     listContainer: {
//       flex: 1,
//       justifyContent: 'center',
//     },
// });