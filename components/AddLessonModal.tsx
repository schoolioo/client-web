import React, { FunctionComponent, useState } from "react";
import { Dialog, Menu, RadioGroup } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";

export type AddSubjectModalProps = {
  onAdd: (data: FormData) => void;
};

type FormData = {
  name: string;
};

export const AddLessonModal: FunctionComponent<AddSubjectModalProps> = ({
  onAdd,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, control, getValues, watch, reset } =
    useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await onAdd(data);
      closeModal();
    } catch (e) {
      setErrorMessage("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  });

  function closeModal() {
    reset();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto bg-black/20"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <form
            onSubmit={onSubmit}
            className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-4"
          >
            <Dialog.Title
              as="h3"
              className="text-lg font-bold leading-6 text-gray-900"
            >
              Ajouter un nouveau chapitre
            </Dialog.Title>

            <div className="flex space-x-2">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Nom de la lesson"
                className="w-full p-3 border-2 rounded-lg outline-none ring-primary focus:ring transition-colors"
              />
            </div>

            <div className="text-red-500 font-bold">{errorMessage}</div>
            <div className="flex justify-between">
              <div />
              <div className="space-x-2">
                <button
                  type="button"
                  className="p-3 bg-gray-300 rounded-lg text-black font-bold"
                  onClick={closeModal}
                >
                  Annuler
                </button>
                <button
                  disabled={loading}
                  type="submit"
                  className="p-3 bg-primary rounded-lg text-white font-bold"
                >
                  {loading ? "Chargement..." : "Ajouter"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>

      <button
        onClick={openModal}
        className="p-4 rounded-3xl border-4 border-dashed border-gray-500 text-gray-500 flex items-center justify-center font-bold text-2xl"
      >
        Ajouter un nouveau chapitre
      </button>
    </>
  );
};
