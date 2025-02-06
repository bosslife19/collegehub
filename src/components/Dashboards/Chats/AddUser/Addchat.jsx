import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, useDisclosure } from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";

const Adds = ({ addNewChat }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newUserName, setNewUserName] = useState("");

  const handleAddUser = () => {
    if (newUserName.trim()) {
      // Create a new user object with default values
      const newUser = {
        id: Date.now(),
        name: newUserName,
        type: "chat",
        lastSeen: "Just Now",
        img: "path/to/default/image.png", // Set a default image for the new user
        hasNotification: false,
        number: 0,
      };
      addNewChat(newUser); // Pass the new user to the parent
      setNewUserName(""); // Reset the form
      onClose(); // Close the modal
    }
  };

  return (
    <>
      <Button onClick={onOpen} leftIcon={<IoAddCircleOutline />} colorScheme="teal">
        Add User
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Enter user name"
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" onClick={handleAddUser}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Adds;
