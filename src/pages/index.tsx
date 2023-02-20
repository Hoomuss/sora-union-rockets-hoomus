import { AddForm } from "@/components";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  return (
    <>
      <AddForm />
      <header className={styles["header"]}>
        <h1 className={styles["header__title"]}>🚀 List of Rockets</h1>
      </header>
    </>
  );
}
