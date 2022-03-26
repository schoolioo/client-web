import React, { FunctionComponent, useState } from "react";
import { Dialog, Menu, RadioGroup } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";

export type AddSubjectModalProps = {};

// emoji array that contains 20 animal emoji

const animalArray = [
  "🐵",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
];

//function to get a random emoji in animalArray
function getRandomEmoji(): string {
  return animalArray[Math.floor(Math.random() * animalArray.length)];
}

type FormData = {
  name: string;
  emoji: string;
};

export const AddSubjectModal: FunctionComponent<AddSubjectModalProps> = () => {
  let [isOpen, setIsOpen] = useState(true);

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, control, getValues, watch } =
    useForm<FormData>({ defaultValues: { emoji: getRandomEmoji() } });

  const onSubmit = handleSubmit((data) => console.log(data));

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [selectedEmoji, setSelectedEmoji] = useState(getRandomEmoji());
  return (
    <Dialog
      open={true}
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto bg-black/20"
      onClose={closeModal}
    >
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0" />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
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
            Ajouter une nouvelle matière
          </Dialog.Title>

          <div className="flex space-x-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="p-3 border-2 rounded-lg outline-none focus:ring ring-primary">
                  {watch().emoji}
                </Menu.Button>
              </div>

              <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Controller
                  control={control}
                  name="emoji"
                  render={({ field: {value, onBlur, onChange} }) => (
                    <RadioGroup
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      className="px-1 py-1 grid grid-cols-5"
                    >
                      {animalArray.map((emoji) => (
                        <Menu.Item key={emoji}>
                          {({ active }) => (
                            <RadioGroup.Option value={emoji}>
                              {({ checked }) => (
                                <span
                                  className={`${
                                    active
                                      ? "border-2 border-primary"
                                      : "border-2 border-transparent"
                                  } ${
                                    checked ? "bg-primary/50" : ""
                                  } select-none cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                                >
                                  {emoji}
                                </span>
                              )}
                            </RadioGroup.Option>
                          )}
                        </Menu.Item>
                      ))}
                    </RadioGroup>
                  )}
                />
              </Menu.Items>
            </Menu>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Nom de la matière"
              className="w-full p-3 border-2 rounded-lg outline-none ring-primary focus:ring transition-colors"
            />
          </div>
          <div className="flex justify-between">
            <div />
            <div className="space-x-2">
              <button
                type="button"
                className="p-3 bg-gray-300 rounded-lg text-black font-bold"
              >
                Annuler
              </button>
              <button
                disabled={loading}
                type="submit"
                className="p-3 bg-primary rounded-lg text-white font-bold"
              >
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    </Dialog>
  );
};
