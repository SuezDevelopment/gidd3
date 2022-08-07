import React, {
    FunctionComponent,
    Dispatch,
    SetStateAction,
    useState,
  } from "react";
  import { View, Keyboard } from "react-native";
  interface Props {
    candidates: Array<ITask>;
    setCandidates: Dispatch<SetStateAction<ITask[]>>;
  }
  
  const ComposeTask: FunctionComponent<Props> = (props:any) => {
    const [fullname, setFullname] = useState("");
    const [positon, setPositon] = useState("");
    const [bio, setBio] = useState("");
    const [department, setDepartment] = useState("");
    const [mat_no, setMat_no] = useState("");
    const { tasks, setTasks } = props;
  
    const onSubmit = () => {
      Keyboard.dismiss();
      if (!fullname || !positon) return;
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      })
        .then((res) => res.json())
        .then((json) => {
          setTasks([json.task, ...tasks]);
          setTitle("");
        });
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Create a new task"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onSubmit}
        >
          ADD
        </Button>
      </View>
    );
  };
  
  export default ComposeTask;