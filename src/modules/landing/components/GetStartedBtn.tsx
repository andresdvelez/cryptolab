"use client";

import { AuthButtons } from "@/modules/auth/components/AuthButtons";
import { CredentialsForm } from "@/modules/auth/components/CredentialsForm";
import { useAuthView } from "@/modules/auth/hooks/useAuthView";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";

export const GetStartedBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { showCredentials, setShowCredentials } = useAuthView();

  const handleOpenChange = () => {
    if (!isOpen) {
      setShowCredentials(false);
    }
    onOpenChange();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Get Started
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        className="fixed md:-right-8 md:-top-16 h-full"
        classNames={{
          closeButton: "right-8 top-8 scale-125 bg-black/80 glass-card",
        }}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: "100%",
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="bg-background">
          <ModalBody className="items-center px-7 pt-20 gap-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-gradient-to-r to-80% from-primary to-secondary bg-clip-text text-transparent">
                Cryptolab
              </span>
              <p className="">
                {showCredentials
                  ? "Enter your credentials below:"
                  : "Choose a sign-in method:"}
              </p>
            </div>

            {showCredentials ? (
              <CredentialsForm
                onShowProviders={() => setShowCredentials(false)}
              />
            ) : (
              <AuthButtons onShowCredentials={() => setShowCredentials(true)} />
            )}

            <p className="text-sm text-center">
              Al crear una cuenta en Cryptolab, aceptas los Términos de Servicio
              y Políticas de privacidad.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
