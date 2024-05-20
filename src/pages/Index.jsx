import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl" mb={6}>Todo App</Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTask} leftIcon={<FaPlus />}>
            Add
          </Button>
        </HStack>
        <VStack spacing={3} w="100%">
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" justifyContent="space-between">
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <Button colorScheme="red" onClick={() => deleteTask(index)} leftIcon={<FaTrash />}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;