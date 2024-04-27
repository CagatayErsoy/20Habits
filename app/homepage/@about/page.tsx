import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  
} from "@nextui-org/react";
interface AboutProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
export default function About({isOpen, onOpenChange}:AboutProps) {
  return (
    <Modal backdrop="blur" isOpen={isOpen}  onOpenChange={onOpenChange} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <h1>About Habits Tracker</h1>
              <p>
                Welcome to the Habits Tracker! This website is designed to help
                you develop and maintain healthy habits for a more productive
                and fulfilling life. By tracking your daily habits, you can gain
                insight into your routines, focus on areas that need
                improvement, and reinforce behaviors that contribute to your
                overall well-being.
              </p>
              <p>
                Our Habit Tracker allows you to monitor a variety of habits such
                as reading, exercising, and mindful eating. Each habit comes
                with a descriptive goal and easy tracking options to help you
                stay committed. Whether you are looking to improve your physical
                health, mental well-being, or personal growth, our tracker is
                here to support you on your journey to becoming the best version
                of yourself.
              </p>
              <p>
                Start by choosing the habits you want to track, and let us help
                you stay motivated and on track. Achieve your goals with
                simplicity and ease, and watch as your small daily actions lead
                to big results. Happy tracking!
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
             
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
