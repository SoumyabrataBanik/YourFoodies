"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import styles from "./image-picker.module.css";
import { ImagePickerTypes } from "@/types";

const ImagePicker: React.FC<ImagePickerTypes> = ({ label, name }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const imagePicker = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    imagePicker.current?.click();
  };

  const imageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setImagePreview(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!imagePreview ? (
            "No Image selected!"
          ) : (
            <Image src={imagePreview} alt="Image Selected by the user" fill />
          )}
        </div>
        <input
          type="file"
          className={styles.input}
          id={name}
          name={name}
          accept="image/png, image/jpg, image/jpeg"
          ref={imagePicker}
          onChange={imageChangeHandler}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={onClickHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
