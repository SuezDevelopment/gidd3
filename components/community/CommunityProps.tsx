// import {memo} from 'react';
// import {Pressable, Platform, StyleSheet} from 'react-native';
// import { Text,View } from '../Themed';


// interface CommunityItemProps {
//     name: string;
//     description: string;
//     membersCount: number;
//     isApproved: boolean;
//     onToggleStatus: () => void;
//     onDelete: () => void;
// }


// export function CommunityProps({
//     name,
//     description,
//     isApproved,
//     membersCount,
//     onToggleStatus,
//     onDelete,
//   }: CommunityItemProps) {

//     return (
//         <View style={styles.task}>
//           <Pressable
//             onPress={onToggleStatus}
//             style={[styles.status, isComplete && styles.completed]}>
//             <Text style={styles.icon}>{isComplete ? '✓' : '○'}</Text>
//           </Pressable>
//           <View style={styles.descriptionContainer}>
//             <Text numberOfLines={1} style={styles.description}>
//               {description}
//             </Text>
//           </View>
//           <Pressable onPress={onDelete} style={styles.deleteButton}>
//             <Text style={styles.deleteText}>Delete</Text>
//           </Pressable>
//         </View>
//     );
// }

// const shouldNotRerender = (
//     prevProps: CommunityItemProps,
//     nextProps: CommunityItemProps,
// ) =>
//     prevProps.description === nextProps.description &&
//     prevProps.isApproved === nextProps.isApproved;
// export default memo(CommunityProps, shouldNotRerender);