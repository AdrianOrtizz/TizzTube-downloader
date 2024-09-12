"use client";

import { useState } from "react";

import { useAppDispatch } from "@/redux/hooks";
import { setURL } from "@/redux/features/videoSlice";

import { validate } from "./validation";

import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  const [videoURL, setVideoURL] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoURL(event.target.value);
    setError(validate(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!error) {
      const videoID = videoURL.split("v=")[1].split("&")[0];
      dispatch(setURL(videoID));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="searchURL" className={styles.label}>
        Introduzca la URL del video:
      </label>
      <input
        name="searchURL"
        type="text"
        placeholder="Buscar"
        value={videoURL}
        onChange={handleChange}
        className={styles.input}
      />
      <span className={styles.error}>{error}</span>
      <button className={styles.button} type="submit" disabled={!!error}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
