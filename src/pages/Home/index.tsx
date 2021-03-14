import React, { useState, useEffect, useCallback } from 'react';
import { ToastAndroid } from "react-native";
import { Header, List } from '../../components';
import {
  BackgroundContainer,
  ContentContainer,
  ButtonView,
  Button,
  ButtonIcon,
  TitleView,
  Title,
  EmptyListText,
  Modal,
  CenteredView,
  ModalView,
  ButtonsView,
  ModalTitle,
  ModalInput,
  ModalButton,
  ButtonText,
  TaskList
} from './styles';

interface ListType {
  id: string,
  task: string,
  done: boolean
}

const mock = [
  {
    'id': '343434',
    'task': 'Arroz',
    'done': false
  },
  {
    'id': '3432434',
    'task': 'Batata',
    'done': true
  },
]

const Home = () => {
  const [list, setList] = useState<ListType[]>(mock);
  const [inputTask, setInputTask] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalEditable, setModalEditable] = useState<boolean>(false);
  const [idEditable, setIdEditable] = useState<any>();

  useEffect(() => {
    inputTask === '' ? setButtonDisabled(true) : setButtonDisabled(false)
  }, [inputTask])

  const setTask = () => {
    const id = Date.now().toString();
    const task = inputTask;
    setList([...list, { id, task, done: false }]);
    handleModal(false, false)
    showToastWithGravity('New Item Added');
  }

  const handleTask = (id: string, task: string, done: boolean): void => {
    const newItem = { id, task, done: !done };
    const updatedItems = list.map(el => el.id == id ? newItem : el);

    setList(updatedItems);
  }

  const editTask = () => {
    const newItem = { id: idEditable.id, 'task': inputTask, 'done': idEditable.done };
    console.log(newItem)
    const updatedItems = list.map(el => el.id == idEditable['id'] ? newItem : el);
    setList(updatedItems);
    handleModal(false, false);
    showToastWithGravity('Item Edited');
  }

  const deleteTask = (id: string) => {
    const newList = list.filter(el => el.id !== id);
    setList(newList);
  }

  const handleEdit = (item: ListType) => {
    handleModal(true, true);
    setInputTask(item.task);
    setIdEditable(item);
  }

  const handleModal = (modal: boolean, editable: boolean) => {
    setModalVisible(modal);
    setModalEditable(editable);
    if (!modal) setInputTask('');
  }

  const showToastWithGravity = (message: string) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      100
    );
  };

  const renderList = ({ item }) => (
    <List
      data={item}
      onPressList={() => handleTask(item.id, item.task, item.done)}
      onLongPress={() => handleEdit(item)}
      onPressIcon={() => deleteTask(item.id)}
    />
  )

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <BackgroundContainer>
      <Header />
      <ContentContainer>
        <TitleView>
          <Title>{'List'}</Title>
          {list.length === 0 && <EmptyListText>{'The list is empty :('}</EmptyListText>}
          {list.length > 0 &&
            <TaskList
              data={list}
              renderItem={renderList}
              keyExtractor={keyExtractor}
            />
          }
        </TitleView>
        <ButtonView>
          <Button onPress={() => handleModal(true, false)}>
            <ButtonIcon />
          </Button>
        </ButtonView>
      </ContentContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <CenteredView>
          <ModalView>
            <ModalTitle>
              {modalEditable ? 'EDIT TASK' : 'ADD NEW TASK'}
            </ModalTitle>
            <ModalInput
              value={inputTask}
              onChangeText={(value: string) => setInputTask(value)} />
            <ButtonsView>
              <ModalButton onPress={() => modalEditable ? editTask() : setTask()}
                disabled={buttonDisabled}>
                <ButtonText disabled={buttonDisabled}>{modalEditable ? 'EDIT' : 'ADD'}</ButtonText>
              </ModalButton>
              <ModalButton cancel onPress={() => handleModal(false, false)}>
                <ButtonText>{'CANCEL'}</ButtonText>
              </ModalButton>
            </ButtonsView>
          </ModalView>
        </CenteredView>
      </Modal>
    </BackgroundContainer>
  )
}

export default Home;
